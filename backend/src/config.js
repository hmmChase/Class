export const port = process.env.PORT || 4000;

export const COOKIE_CONFIG = {
  httpOnly: true,
  // path: '/',
  secure: process.env.NODE_ENV === 'production',
  maxAge: 1000 * 60 * 20, // 20m
  sameSite: 'strict'
};

const deployedUrl = process.env.VERCEL_URL;

const frontendUrlProd = 'https://challenge-board.vercel.app';

const frontendUrlDev = 'http://localhost:3000';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? frontendUrlProd : frontendUrlDev;

export const CORSwhitelist =
  process.env.NODE_ENV === 'production'
    ? [frontendUrlProd, deployedUrl]
    : frontendUrlDev;
