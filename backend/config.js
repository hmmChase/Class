exports.COOKIE_CONFIG = {
  httpOnly: true,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 3600000,
  sameSite: 'strict'
};

exports.BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://challenge-board.vercel.app'
    : 'http://localhost:3000';
