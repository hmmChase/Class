export const port = process.env.PORT || 4000;

export const production = process.env.VERCEL_ENV === 'production';

const frontendUrlDev = 'http://localhost:3000';
const frontendUrlProd = 'https://challenge-board.vercel.app';

export const deployedUrl = process.env.VERCEL_URL;

export const frontendUrl = production ? frontendUrlProd : frontendUrlDev;

export const accessTokenExpiryTime = '10m';
export const refreshTokenExpiryTime = '1w'; // 1 week

export const ATcookieExpiry = 24 * 60 * 60 * 1000; // 1 day
export const RTcookieExpiry = 7 * 24 * 60 * 60 * 1000; // 1 week
export const stateCookieExpiry = 7 * 24 * 60 * 60 * 1000; // 1 week
