import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';
import * as emailHandler from '../handlers/emailHandler';
import * as authService from '../services/authService';

const prisma = new PrismaClient();

export const signupUserByEmail = async (res, username, email, password) => {
  const emailNormalized = email.trim().toLowerCase();
  const usernameNormalized = username.trim();
  const passwordHashed = await argon2.hash(password);

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
  console.log('res:', res);
  console.log('email:', email);
  console.log('password:', password);

  const userRecord = await prisma.user.findOne({ where: { email } });

  console.log('userRecord:', userRecord);

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  console.log('isCorrectPass:', isCorrectPass);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userJWT = { user: { id: userRecord.id } };

  console.log('userJWT:', userJWT);

  const newJWT = authService.generateJWT(userJWT);

  console.log('newJWT:', newJWT);

  const userClientData = authService.userClientCleaner(userRecord);

  console.log('userClientData:', userClientData);

  return [newJWT, userClientData];
};
