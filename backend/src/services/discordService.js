import DiscordOauth2 from 'discord-oauth2';

import prisma from '../../prisma/prisma.js';
import * as authService from './authService.js';
// import * as emailHandler from '../handlers/emailHandler.js';
import { frontendUrl } from '../constants/config.js';
import { createAccessToken } from '../utils/accessToken.js';
import { createRefreshToken } from '../utils/refreshToken.js';

export const oauthSignup = new DiscordOauth2({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_SECRET,
  redirectUri: `${frontendUrl}/signup-discord`
});

export const oauthLogin = new DiscordOauth2({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_SECRET,
  redirectUri: `${frontendUrl}/login-discord`
});

export const signup = async (res, code) => {
  let tokenResponse;

  try {
    tokenResponse = await oauthSignup.tokenRequest({
      code,
      scope: 'identify email',
      grantType: 'authorization_code'
    });
  } catch (error) {
    console.log('signup error: ', error);
  }

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

  // emailHandler.sendEmailSignup(userClientData.username, userClientData.email);

  const jwtData = { user: { id: userClientData.id } };

  const newRefreshToken = createRefreshToken(jwtData);

  const newAccessJWT = createAccessToken(jwtData);

  return { newRefreshToken, newAccessJWT, user: userClientData };
};

export const login = async (res, code) => {
  const tokenResponse = await oauthLogin.tokenRequest({
    code,
    scope: 'identify email',
    grantType: 'authorization_code'
  });

  const discordUser = await oauthLogin.getUser(tokenResponse.access_token);

  if (!discordUser)
    return res.status(401).json({ error: 'user.notFoundDiscord' });

  const userRecord = await prisma.user.findUnique({
    where: { email: discordUser.email }
  });

  if (!userRecord)
    return res.status(401).json({ error: 'user.notFoundDiscord' });

  const userClientData = authService.userClientCleaner(userRecord);

  const jwtData = { user: { id: userClientData.id } };

  const newRefreshToken = createRefreshToken(jwtData);

  const newAccessJWT = createAccessToken(jwtData);

  return { newRefreshToken, newAccessJWT, user: userClientData };
};
