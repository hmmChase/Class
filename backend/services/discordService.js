import { PrismaClient } from '@prisma/client';
import DiscordOauth2 from 'discord-oauth2';
import * as authService from './authService';
import * as emailHandler from '../handlers/emailHandler';

const prisma = new PrismaClient();

// Set up the service with some base information
export const oauthSignup = new DiscordOauth2({
  // Provided when you sign up on Discord for an app
  clientId: process.env.DISCORD_CLIENT_ID,

  // Provided when you sign up on Discord for an app
  clientSecret: process.env.DISCORD_SECRET,

  // Add this as redirect URI in Discord app config
  redirectUri: 'http://localhost:3000/signup-discord'
});

export const oauthLogin = new DiscordOauth2({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_SECRET,
  redirectUri: 'http://localhost:3000/login-discord'
});

export const signup = async code => {
  // Grab an access_token from Discord based on the code and any prior scope
  const tokenResponse = await oauthSignup.tokenRequest({
    code,
    scope: 'identify email',
    grantType: 'authorization_code',
    redirectUri: 'http://localhost:3000/signup-discord'
  });

  // Now that we have the access_token, let's get some user information
  const discordUser = await oauthSignup.getUser(tokenResponse.access_token);

  if (!discordUser)
    return res.status(401).json({ error: 'user.notFoundDiscord' });

  const user = {
    username: discordUser.username,
    email: discordUser.email,
    hasDiscordLogin: true
  };

  const userRecord = await prisma.user.create({ data: user });

  const userClientData = authService.userClientCleaner(userRecord);

  emailHandler.sendEmailSignup(
    userClientData.user.username,
    userClientData.user.email
  );

  const jwtData = { user: { id: userClientData.user.id } };

  // Create the JWT here, but let the controller set the cookie
  const jwt = authService.generateJWT(jwtData);

  return { jwt, user: userClientData };
};

export const login = async (req, code) => {
  const tokenResponse = await oauthSignup.tokenRequest({
    code,
    scope: 'identify email',
    grantType: 'authorization_code',
    redirectUri: 'http://localhost:3000/login-discord'
  });

  const discordUser = await oauthSignup.getUser(tokenResponse.access_token);

  if (!discordUser)
    return res.status(401).json({ error: 'user.notFoundDiscord' });

  const userRecord = await prisma.user.findOne({
    where: { email: discordUser.email }
  });

  if (!userRecord)
    return req.status(401).json({ error: 'user.notFoundDiscord' });

  const userClientData = authService.userClientCleaner(userRecord);

  const jwtData = { user: { id: userClientData.user.id } };

  const jwt = authService.generateJWT(jwtData);

  return { jwt, user: userClientData };
};
