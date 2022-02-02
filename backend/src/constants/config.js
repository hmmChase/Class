export const port = process.env.PORT || 4000;

export const production = process.env.VERCEL_ENV === 'production';

const frontendUrlDev = 'http://localhost:3000';
const frontendUrlProd = 'https://challenge-board.vercel.app';

export const deployedUrl = process.env.VERCEL_URL;

export const frontendUrl = production ? frontendUrlProd : frontendUrlDev;

export const accessTokenExpiryTime = '1d';
export const refreshTokenExpiryTime = '1w';
