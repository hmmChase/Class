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
    email: emailNormalized,
    username: usernameNormalized,
    password: passwordHashed
  };

  const createdUser = await prisma.user.create({ data: user });

  emailHandler.sendEmailSignup(emailNormalized, usernameNormalized);

  return createdUser;
};

export const loginWithEmail = async (res, email, password) => {
  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userJWT = { user: { id: userRecord.id } };

  const newJWT = authService.generateJWT(userJWT);

  const userClientData = {
    id: createdUser.id,
    username: createdUser.username,
    email: createdUser.email,
    role: createdUser.role
  };

  return { newJWT, userClientData };
};
