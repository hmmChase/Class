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

exports.loginWithEmail = async (email, password) => {
  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord) throw Error('User not found');

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass) throw Error('Incorrect password');

  const user = { user: { id: userRecord.id } };

  const jwt = authService.generateJWT(user);

  return { jwt, user };
};
