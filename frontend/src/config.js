export const API_VERSION = 'v1';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://challenge-board.vercel.app'
    : 'http://localhost:4000';

export const errorCodeToMessage = {
  default: 'Error, please try again.',
  'login.invalidCredentials': 'Invalid credentials, please try again.',
  'signup.invalidEmail': 'Invalid email, please try again,',
  'signup.notString': 'Invalid email, please try again,',
  'user.notFound': 'Login failed, please try again,',
  'user.unauthorized': 'Not Authorized.'
};
