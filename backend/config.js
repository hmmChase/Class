export const COOKIE_CONFIG = {
  httpOnly: true,
  // path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 1000 * 60 * 20, // 20m
  sameSite: 'none'
};

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://challenge-board.vercel.app'
    : 'http://localhost:3000';

export const port = 4000;
