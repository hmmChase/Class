export const API_VERSION = 'v1';

const backendUrlDev = 'http://localhost:6969';

const backendUrlProd = 'https://challenge-board-backend.vercel.app';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? backendUrlProd : backendUrlDev;

export const errorCodeToMessage = {
  default: 'Error, please try again.',
  'login.invalidCredentials': 'Invalid credentials, please try again.',
  'signup.invalidEmail': 'Invalid email, please try again,',
  'signup.notString': 'Invalid email, please try again,',
  'user.notFound': 'Login failed, please try again,',
  'user.unauthorized': 'Not Authorized.'
};
