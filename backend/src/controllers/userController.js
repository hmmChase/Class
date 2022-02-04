import crypto from 'crypto';
// import argon2 from 'argon2';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from '../../prisma/prisma.js';
import * as authService from '../services/authService.js';
import * as userService from '../services/userService.js';
import * as emailHandler from '../handlers/emailHandler.js';
import { frontendUrl } from '../constants/config.js';
import { ATcookieOptions, RTcookieOptions } from '../constants/cookie.js';
import { createAccessToken } from '../utils/accessToken.js';
import { createRefreshToken } from '../utils/refreshToken.js';

export const getAllUsers = async (req, res, next) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = jwt.verify(
      req.cookies.at,
      Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64')
    );

    const userRecord = await prisma.user.findUnique({
      where: { id: user.user.id }
    });

    if (!userRecord)
      return res.status(401).json({ message: 'unauthenticated' });

    const userClient = authService.userClientCleaner(userRecord);

    return res.json(userClient);
  } catch (error) {
    return res.status(401).json({ message: 'unauthenticated' });
  }
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const createdUser = await userService.signupUserByEmail(
    res,
    username,
    email,
    password
  );

  const refreshJWTdata = { user: { id: userRecord.id } };

  const newRefreshToken = createRefreshToken(refreshJWTdata);

  res.cookie('rt', newRefreshToken, RTcookieOptions);

  const accessJWTdata = { user: { id: createdUser.id } };

  const newAccessToken = createAccessToken(accessJWTdata);

  res.cookie('at', newAccessToken, ATcookieOptions);

  const userClientData = authService.userClientCleaner(createdUser);

  return res.json(userClientData);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userRecord = await prisma.user.findUnique({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  // const isCorrectPass = await argon2.verify(userRecord.password, password);
  const isCorrectPass = await bcryptjs.compare(password, userRecord.password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const refreshJWTdata = { user: { id: userRecord.id } };

  const newRefreshToken = createRefreshToken(refreshJWTdata);

  res.cookie('rt', newRefreshToken, RTcookieOptions);

  const accessJWTdata = { user: { id: userRecord.id } };

  const newAccessJWT = createAccessToken(accessJWTdata);

  res.cookie('at', newAccessJWT, ATcookieOptions);

  const userClientData = authService.userClientCleaner(userRecord);

  return res.json(userClientData);
};

export const logout = async (req, res) => {
  res.clearCookie('at');
  res.clearCookie('rt');
  res.clearCookie('state');

  return res.json(true);
};

export const generatePassReset = async (req, res) => {
  const { email } = req.body;

  // if can find email, begin reset flow
  const userRecord = await prisma.user.findUnique({ where: { email } });

  const emailSentMessage = 'An email has been sent to the specified address';

  // don't tell them the user doesn't exist!!
  if (!userRecord) return res.json({ message: emailSentMessage });

  // generate token and expiry, set it on user row
  const resetPassToken = crypto.randomBytes(25).toString('hex');
  const expiryDate = Date.now() + 1000 * 60 * 60; // 1 hour
  const resetPassTokenExpiry = new Date(expiryDate).toISOString();

  await prisma.user.update({
    where: { email: userRecord.email },
    data: { resetPassToken, resetPassTokenExpiry }
  });

  // send email with reset password in a link
  const resetPasswordUrl = `${frontendUrl}/reset-password?resetToken=${resetPassToken}`;

  emailHandler.sendEmailPasswordReset(email, resetPasswordUrl);

  return res.json({ message: emailSentMessage });
};

export const resetPassword = async (req, res) => {
  const { newPassword, resetToken } = req.body;

  const userRecord = await prisma.user.findUnique({
    where: {
      resetPassToken: resetToken

      // resetPassTokenExpiry: {
      //   // if the expiration is after right now, it's valid
      //   gt: Date.now()
      // }
    }
  });

  const tokenInvalidMessage =
    'Reset token invalid. Try resetting your password again.';

  if (!userRecord) return res.status(401).json({ error: tokenInvalidMessage });

  const isTokenExpired = Date.now() > userRecord.resetPassTokenExpiry;

  if (!userRecord || isTokenExpired)
    return res.status(401).json({ error: tokenInvalidMessage });

  // hash the password
  // const hashedPassword = await argon2.hash(newPassword);
  const hashedPassword = await bcryptjs.hash(newPassword);

  // update the record
  const updatedUser = await prisma.user.update({
    where: { id: userRecord.id },

    data: {
      password: hashedPassword,
      resetPassToken: null,
      resetPassTokenExpiry: null
    }
  });

  // log them back in
  const [jwt, user] = await userService.resetPasswordLogin(
    res,
    updatedUser.email,
    newPassword
  );

  res.cookie('at', jwt, ATcookieOptions);

  return res.json(user);
};

export const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.rt;

    const refreshSecret = Buffer.from(
      process.env.REFRESH_TOKEN_SECRET,
      'base64'
    );

    const payload = jwt.verify(refreshToken, refreshSecret);

    if (!payload) return res.status(401).send({ message: 'unauthenticated' });

    const user = await prisma.user.findUnique({
      where: { id: payload.user.id }
    });

    if (!user) return res.status(401).send({ message: 'unauthenticated' });

    const accessJWTdata = { user: { id: user.id } };

    const newAccessToken = createAccessToken(accessJWTdata);

    res.cookie('at', newAccessToken, ATcookieOptions);

    res.send(true);
  } catch (err) {
    return res.status(401).send({ message: 'unauthenticated' });
  }
};
