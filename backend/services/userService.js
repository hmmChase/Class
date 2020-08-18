const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const emailHandler = require('../handlers/emailHandler');
const authService = require('../services/authService');

const prisma = new PrismaClient();

const createUser = async (email, username, password, role, avatarUrl) => {
  const hashedPassword = await argon2.hash(password);

  const user = { username, email, password: hashedPassword, role, avatarUrl };

  const userRecord = await prisma.user.create({ data: user });

  const userData = {
    id: userRecord.id,
    email: userRecord.email,
    username: userRecord.username,
    role: userRecord.role,
    avatarUrl: userRecord.avatarUrl
  };

  return userData;
};

exports.signupUserByEmail = async (
  email,
  username,
  password,
  role,
  avatarUrl
) => {
  const createdUser = await createUser(
    email,
    username,
    password,
    role,
    avatarUrl
  );

  emailHandler.sendEmailSignup(email, username);

  return createdUser;
};

exports.loginWithEmail = async (res, email, password) => {
  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userJWT = { user: { id: userRecord.id } };

  const newJWT = authService.generateJWT(userJWT);

  const userClient = {
    id: userRecord.id,
    hasDiscordLogin: userRecord.hasDiscordLogin,
    role: userRecord.role,
    email: userRecord.email,
    username: userRecord.username,
    name: userRecord.name,
    avatarUrl: userRecord.avatarUrl
  };

  return { newJWT, userClient };
};
