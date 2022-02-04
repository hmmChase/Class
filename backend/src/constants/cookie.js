// http://expressjs.com/en/5x/api.html#res.cookie
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

import {
  production,
  ATcookieExpiry,
  RTcookieExpiry,
  stateCookieExpiry
} from './config.js';

export const ATcookieOptions = {
  maxAge: ATcookieExpiry,
  // expires: new Date(Date.now() + cookieExpiry * 1000),
  httpOnly: true,
  secure: production,
  sameSite: production ? 'none' : 'strict', // production is cross-site
  // path: '/gql', // use '/' if cookie not showing in chrome
  domain: '', //  name-backend.vercel.app
  // domain: production ? `name.vercel.app:${port}` : 'localhost'
  sameParty: true // allow cookies to be set by same origin
};

export const RTcookieOptions = {
  maxAge: RTcookieExpiry,
  // expires: new Date(Date.now() + cookieExpiry * 1000),
  httpOnly: true,
  secure: production,
  sameSite: production ? 'none' : 'strict', // production is cross-site
  // path: '/gql', // use '/' if cookie not showing in chrome
  domain: '', //  name-backend.vercel.app
  // domain: production ? `name.vercel.app:${port}` : 'localhost'
  sameParty: true // allow cookies to be set by same origin
};

export const stateCookieOptions = {
  maxAge: stateCookieExpiry,
  // expires: new Date(Date.now() + cookieExpiry * 1000),
  httpOnly: true,
  secure: production,
  sameSite: production ? 'none' : 'strict', // production is cross-site
  // path: '/gql', // use '/' if cookie not showing in chrome
  domain: '', //  name-backend.vercel.app
  // domain: production ? `name.vercel.app:${port}` : 'localhost'
  sameParty: true // allow cookies to be set by same origin
};
