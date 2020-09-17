import { PrismaClient } from '@prisma/client';
import DiscordOauth2 from 'discord-oauth2';
import * as authService from './authService';
import * as emailHandler from '../handlers/emailHandler';

const prisma = new PrismaClient();

// Set up the service with some base information
export const oauth = new DiscordOauth2({
  // Provided when you sign up on Discord for an app
  clientId: process.env.DISCORD_CLIENT_ID,

  // Provided when you sign up on Discord for an app
  clientSecret: process.env.DISCORD_SECRET,

  // Add this as redirect URI in Discord app config
  redirectUri: 'http://localhost:3000/login-discord'
});

const createUser = async (username, email) => {
  const user = { username, email, hasDiscordLogin: true };

  const userRecord = await prisma.user.create({ data: user });

  return authService.userClientCleaner(userRecord);
};

export const createUserByDiscord = async code => {
  // Grab an access_token from Discord based on the code and any prior scope

  const tokenResponse = await oauth.tokenRequest({
    code,
    scope: 'identify email',
    grantType: 'authorization_code',
    redirectUri: 'http://localhost:3000/login-discord'
  });

  // Now that we have the access_token, let's get some user information
  const discordUser = await oauth.getUser(tokenResponse.access_token);

  // authService will handle creating the user in the database for us
  const createdUser = await createUser(discordUser.username, discordUser.email);

  emailHandler.sendEmailSignup(
    createdUser.user.username,
    createdUser.user.email
  );

  const jwtData = { user: { id: createdUser.user.id } };

  // // Create the JWT here, but let the controller set the cookie
  const jwt = authService.generateJWT(jwtData);

  return { jwt, user: createdUser };
};
