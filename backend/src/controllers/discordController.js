import crypto from 'crypto';

import * as authService from '../services/authService.js';
import * as discordService from '../services/discordService.js';
import {
  ATcookieOptions,
  RTcookieOptions,
  stateCookieOptions
} from '../constants/cookie.js';

export const getSignupUrl = (req, res) => {
  const scope = ['identify', 'email'];
  const state = crypto.randomBytes(16).toString('hex');

  const url = discordService.oauthSignup.generateAuthUrl({ scope, state });

  res.cookie('state', state, stateCookieOptions);

  return res.json(url);
};

export const getLoginUrl = (req, res) => {
  const scope = ['identify', 'email'];
  const state = crypto.randomBytes(16).toString('hex');

  const url = discordService.oauthLogin.generateAuthUrl({ scope, state });

  res.cookie('state', state, stateCookieOptions);

  return res.json(url);
};

export const signupDiscord = async (req, res) => {
  const { code, state } = req.body;

  const previousState = authService.getStateFromHeader(req);

  if (state !== previousState)
    return res.status(401).json({ error: 'login.discordError' });

  const { newRefreshToken, newAccessJWT, user } = await discordService.signup(
    res,
    code
  );

  res.cookie('rt', newRefreshToken, RTcookieOptions);

  res.cookie('at', newAccessJWT, ATcookieOptions);

  return res.json(user);
};

export const loginDiscord = async (req, res) => {
  const { code, state } = req.body;

  const previousState = authService.getStateFromHeader(req);

  if (state !== previousState)
    return res.status(401).json({ error: 'login.discordError' });

  const { newRefreshToken, newAccessJWT, user } = await discordService.login(
    res,
    code
  );

  res.cookie('rt', newRefreshToken, RTcookieOptions);

  res.cookie('at', newAccessJWT, ATcookieOptions);

  return res.json(user);
};
