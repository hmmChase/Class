export const port = process.env.PORT || 4000;

export const COOKIE_CONFIG = {
  maxAge: 1000 * 60 * 20, // 20m
  path: '/',
  httpOnly: process.env.NODE_ENV === 'production',
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'none'
};

// sameSite: 'strict'

// const stuff = {
//   maxAge: 1000 * 60 * 60 * 24 * 7,
//   path: '/',
//   httpOnly: true,
//   secure: true,
//   sameSite: 'none'
//   // sameParty: false
// };

const deployedUrl = process.env.VERCEL_URL;

const frontendUrlProd = 'https://challenge-board.vercel.app';

const frontendUrlDev = 'http://localhost:3000';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? frontendUrlProd : frontendUrlDev;

export const CORSwhitelist =
  process.env.NODE_ENV === 'production'
    ? [frontendUrlProd, deployedUrl]
    : frontendUrlDev;
