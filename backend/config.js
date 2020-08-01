exports.COOKIE_CONFIG = {
  httpOnly: true,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 3600000,
  sameSite: 'strict'
};
