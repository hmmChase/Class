const discordService = require('../services/discordService');
const COOKIE_CONFIG = require('../config').COOKIE_CONFIG;

exports.getDiscordUrl = (req, res) => {
  const url = discordService.generateDiscordURL();

  const stateParam = discordService.getParameterByName('state', url);

  const options = {
    httpOnly: true,
    // path: '/',
    // secure: process.env.NODE_ENV === 'production',
    // sameSite: 'strict',
    maxAge: 1000 * 60 * 20 // 20m for CSRF protection
  };

  res.cookie('state', stateParam, options);

  return res.json({ discordUrl: url });
};

exports.authenticateDiscordUser = async (req, res) => {
  const { code, state } = req.body;

  // We need to check the state
  // It was set in the cookie and the supposedly-correct state was sent in the body
  const previousState = discordService.getStateFromHeader(req);

  // If the state from the body didn't match the state from the cookie, it was not the same user
  const invalidMessage = 'invalid Discord authorization';
  if (state !== previousState)
    return res.status(401).json({ message: invalidMessage });

  // By taking this out of the controller function, we keep our responsibilities low
  const { user, jwt } = await discordService.createDiscordUser(code);

  // We're good. Let's log them in with a JWT
  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
