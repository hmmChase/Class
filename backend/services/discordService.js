const DiscordOauth2 = require('discord-oauth2');
const { PrismaClient } = require('@prisma/client');
const crypto = require('crypto');
const authService = require('./authService');
const emailHandler = require('../handlers/emailHandler');

const prisma = new PrismaClient();

// Set up the service with some base information
const oauth = new DiscordOauth2({
  // Provided when you sign up on Discord for an app
  clientId: process.env.DISCORD_CLIENT_ID,

  // Provided when you sign up on Discord for an app
  clientSecret: process.env.DISCORD_SECRET,

  // Add this as redirect URI in Discord app config
  redirectUri: 'http://localhost:3000/login-discord'
});

// Wraps DiscordOauth2's generate auth url
exports.generateDiscordURL = () => {
  const url = oauth.generateAuthUrl({
    // See Discord OAuth docs for scope info
    scope: ['identify', 'email'],

    // Cryptographically-secure random 16 bytes
    state: crypto.randomBytes(16).toString('hex')
  });

  return url;
};

exports.createUserByDiscord = async code => {
  // Grab an access_token from Discord based on the code and any prior scope

  const tokenResponse = await oauth.tokenRequest({
    code: code,
    scope: 'identify email',
    // check the Discord OAuth docs for various grantTypes
    grantType: 'authorization_code'
  });

  // Now that we have the access_token, let's get some user information
  const discordUser = await oauth.getUser(tokenResponse.access_token);

  // authService will handle creating the user in the database for us
  const createdUser = await signupUserByDiscord(
    discordUser.email,
    discordUser.username
  );

  // Create the JWT here, but let the controller set the cookie
  const jwt = authService.generateJWT(createdUser);

  return { jwt, user: createdUser };
};

const createUser = async (email, username) => {
  const user = { email, username, hasDiscordLogin: true };

  const userRecord = await prisma.user.create({ data: user });

  const userData = {
    id: userRecord.id,
    email: userRecord.email,
    username: userRecord.username,
    role: userRecord.role,
    avatarUrl: userRecord.avatarUrl
  };

  return userData;
};

exports.signupUserByDiscord = async (email, username) => {
  const createdUser = await createUser(email, username);

  emailHandler.sendEmailSignup(email, username);

  return createdUser;
};
