const cookie = require('cookie');
const discordOAuthService = require('../services/discordService');
const COOKIE_CONFIG = require('../config').COOKIE_CONFIG;

const getParameterByName = (name, url) => {
  const parsedName = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const getStateFromHeader = req => {
  if (req.headers) {
    const state = cookie.parse(req.headers.cookie).state;

    return state;
  }
};

exports.getDiscordUrl = (req, res) => {
  const url = discordOAuthService.generateDiscordURL();

  const paramName = getParameterByName('state', url);

  const options = { maxAge: 1000 * 60 * 20 }; // 20m for CSRF protection

  res.cookie('state', paramName, options);

  res.json({ discordUrl: url });
};

exports.authenticateDiscordUser = async (req, res) => {
  const { code, state } = req.body;

  // We need to check the state
  // It was set in the cookie and the supposedly-correct state was sent in the body
  const previousState = getStateFromHeader(req);

  // If the state from the body didn't match the state from the cookie, it was not the same user
  const invalidMessage = 'invalid Discord authorization';
  if (state !== previousState)
    return res.status(401).json({ message: invalidMessage });

  // By taking this out of the controller function, we keep our responsibilities low
  const { user, jwt } = await discordOAuthService.createDiscordUser(
    code,
    state
  );

  // We're good. Let's log them in with a JWT
  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
