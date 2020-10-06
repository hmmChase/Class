export const COOKIE_CONFIG = {
  httpOnly: true,
  path: '/',
  secure: process.env.NODE_ENV === 'production',
  // maxAge: 3600000,
  maxAge: 1000 * 60 * 20, // 20m
  sameSite: 'strict'
};

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? [
        'https://challenge-board.vercel.app',
        'https://challenge-board-backend.vercel.app'
      ]
    : 'http://localhost:3000';

export const port = 4000;
