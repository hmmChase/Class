import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import * as authService from '../services/authService';
import * as userService from '../services/userService';
import * as emailHandler from '../handlers/emailHandler';
import { COOKIE_CONFIG, BASE_URL } from '../config';

const prisma = new PrismaClient();

export const getAllUsers = async (req, res, next) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

export const getCurrentUser = async (req, res) => {
  if (!req || !req.cookies || !req.cookies.jwt) return res.json({});

  const user = jwt.verify(
    req.cookies.jwt,
    Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64')
  );

  try {
    const userRecord = await prisma.user.findOne({
      where: { id: user.user.id }
    });

    if (!userRecord) return req.status(404).json({ error: 'user.notFound' });

    const userJWT = { user: { id: userRecord.id } };

    const newJWT = authService.generateJWT(userJWT);

    const userClient = authService.userClientCleaner(userRecord);

    res.cookie('jwt', newJWT, COOKIE_CONFIG);

    return res.json(userClient);
  } catch (error) {
    return res.json({});
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

  const jwtData = { user: { id: createdUser.id } };

  const newJWT = authService.generateJWT(jwtData);

  const userClientData = authService.userClientCleaner(createdUser);

  res.cookie('jwt', newJWT, COOKIE_CONFIG);

  return res.json(userClientData);
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const jwtData = { user: { id: userRecord.id } };

  const newJWT = authService.generateJWT(jwtData);

  const userClientData = authService.userClientCleaner(userRecord);

  res.cookie('jwt', newJWT, COOKIE_CONFIG);

  return res.json(userClientData);
};

export const logout = async (req, res) => {
  res.clearCookie('jwt');
  res.clearCookie('state');

  return res.json(true);
};

export const generatePassReset = async (req, res) => {
  const { email } = req.body;

  // if can find email, begin reset flow
  const userRecord = await prisma.user.findOne({ where: { email } });

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
  const resetPasswordUrl = `${BASE_URL}/reset-password?resetToken=${resetPassToken}`;

  emailHandler.sendEmailPasswordReset(email, resetPasswordUrl);

  return res.json({ message: emailSentMessage });
};

export const resetPassword = async (req, res) => {
  const { newPassword, resetToken } = req.body;

  const userRecord = await prisma.user.findOne({
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
  const hashedPassword = await argon2.hash(newPassword);

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

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
