import jwt from 'jsonwebtoken';

export const generateJWT = payload => {
  const secret = Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64');
  const options = { expiresIn: '6h' };

  return jwt.sign(payload, secret, options);
};

export const getParameterByName = (name, url) => {
  const parsedName = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

export const getStateFromHeader = req => {
  console.log('getStateFromHeader req: ', req);

  // if (req && req.headers) return cookie.parse(req.headers.cookie).state;

  if (req && req.headers) return req.cookies.state;
};

export const userClientCleaner = user => ({
  user: {
    id: user.id,
    hasDiscordLogin: user.hasDiscordLogin,
    role: user.role,
    email: user.email,
    username: user.username,
    name: user.name,
    avatarUrl: user.avatarUrl
  }
});
