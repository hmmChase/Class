import crypto from 'crypto';
import * as authService from '../services/authService';
import * as discordService from '../services/discordService';
import { COOKIE_CONFIG } from '../config';

export const getSignupUrl = (req, res) => {
  const scope = ['identify', 'email'];
  const state = crypto.randomBytes(16).toString('hex');
  const redirectUri = 'http://localhost:3000/signup-discord';

  const url = discordService.oauthSignup.generateAuthUrl({
    scope,
    state,
    redirectUri
  });

  const options = {
    httpOnly: true,
    // path: '/',
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'strict',
    maxAge: 1000 * 60 * 20 // 20m for CSRF protection
  };

  res.cookie('state', state, options);

  return res.json(url);
};

export const getLoginUrl = (req, res) => {
  const scope = ['identify', 'email'];
  const state = crypto.randomBytes(16).toString('hex');
  const redirectUri = 'http://localhost:3000/login-discord';

  const url = discordService.oauthSignup.generateAuthUrl({
    scope,
    state,
    redirectUri
  });

  const options = {
    httpOnly: true,
    // path: '/',
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'strict',
    maxAge: 1000 * 60 * 20 // 20m for CSRF protection
  };

  res.cookie('state', state, options);

  return res.json(url);
};

export const signupDiscord = async (req, res) => {
  const { code, state } = req.body;

  const previousState = authService.getStateFromHeader(req);

  if (state !== previousState)
    return res.status(401).json({ error: 'login.discordError' });

  const { user, jwt } = await discordService.signup(code);

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};

export const loginDiscord = async (req, res) => {
  const { code, state } = req.body;

  console.log('code:', code);
  console.log('state:', state);

  const previousState = authService.getStateFromHeader(req);

  console.log('previousState:', previousState);

  if (state !== previousState)
    return res.status(401).json({ error: 'login.discordError' });

  const { user, jwt } = await discordService.login(code);

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
