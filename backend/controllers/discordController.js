import crypto from 'crypto';
import * as authService from '../services/authService';
import * as discordService from '../services/discordService';
import { COOKIE_CONFIG } from '../config';

export const getUrl = (req, res) => {
  const scope = ['identify', 'email'];

  const state = crypto.randomBytes(16).toString('hex');

  const url = discordService.oauth.generateAuthUrl({
    scope,
    state,
    redirectUri: 'http://localhost:3000/login-discord'
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

export const authenticateUser = async (req, res) => {
  const { code, state } = req.body;

  // We need to check the state
  // It was set in the cookie and the supposedly-correct state was sent in the body
  const previousState = authService.getStateFromHeader(req);

  // If the state from the body didn't match the state from the cookie, it was not the same user
  const invalidMessage = 'invalid Discord authorization';

  if (state !== previousState)
    return res.status(401).json({ message: invalidMessage });

  // // By taking this out of the controller function, we keep our responsibilities low
  const { user, jwt } = await discordService.createUserByDiscord(code);

  // We're good. Let's log them in with a JWT
  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
