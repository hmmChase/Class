import jwt from 'jsonwebtoken';
// import Iron from '@hapi/iron';

import { refreshTokenExpiryTime } from '../constants/config.js';

const secret = Buffer.from(process.env.REFRESH_TOKEN_SECRET, 'base64');

export const createRefreshToken = payload => {
  // const ironAT = await Iron.seal(payload, secret, Iron.defaults);

  const JWToptions = { expiresIn: refreshTokenExpiryTime };

  const jwtRefreshToken = jwt.sign(payload, secret, JWToptions);

  return jwtRefreshToken;
};

//! TODO: https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/

export const verifyRefreshToken = refreshToken => {
  try {
    // const payload = await Iron.unseal(refreshToken, secret, Iron.defaults);

    // Decode payload if signature is valid and JWT not expired
    const payload = jwt.verify(refreshToken, secret);

    // Return payload
    return payload;
  } catch (error) {
    console.log('refreshToken verifyRefreshToken error: ', error);

    // If not, throw error
    // throw new ForbiddenError(error.message);
  }
};
