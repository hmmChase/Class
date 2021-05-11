// import { PrismaClient } from '@prisma/client';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// import argon2 from 'argon2';
import bcryptjs from 'bcryptjs';
import * as emailHandler from '../handlers/emailHandler.js';
import * as authService from '../services/authService.js';

const prisma = new PrismaClient();

export const signupUserByEmail = async (res, username, email, password) => {
  const emailNormalized = email.trim().toLowerCase();
  const usernameNormalized = username.trim();
  // const passwordHashed = await argon2.hash(password);
  const passwordHashed = await bcryptjs.hash(password);

  // authService.validateEmail(res, emailNormalized);

  const user = {
    username: usernameNormalized,
    email: emailNormalized,
    password: passwordHashed
  };

  const createdUser = await prisma.user.create({ data: user });

  emailHandler.sendEmailSignup(usernameNormalized, emailNormalized);

  return createdUser;
};

export const resetPasswordLogin = async (res, email, password) => {
  const userRecord = await prisma.user.findUnique({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  // const isCorrectPass = await argon2.verify(userRecord.password, password);
  const isCorrectPass = await bcryptjs.compare(userRecord.password, password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userJWT = { user: { id: userRecord.id } };

  const newJWT = authService.generateJWT(userJWT);

  const userClientData = authService.userClientCleaner(userRecord);

  return [newJWT, userClientData];
};
