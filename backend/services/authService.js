const jwt = require('jsonwebtoken');
const cookie = require('cookie');

exports.generateJWT = payload => {
  const secret = Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64');
  const options = { expiresIn: '6h' };

  return jwt.sign(payload, secret, options);
};

exports.getParameterByName = (name, url) => {
  const parsedName = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

exports.getStateFromHeader = req => {
  if (req && req.headers) return cookie.parse(req.headers.cookie).state;
};
