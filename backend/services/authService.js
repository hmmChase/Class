const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const { sendEmail } = require('../handlers/emailHandler');

const prisma = new PrismaClient();

exports.generateJWT = payload => {
  const secret = Buffer.from(process.env.JWT_SECRET, 'base64');
  const options = { expiresIn: '6h' };

  return jwt.sign(payload, secret, options);
};

exports.loginUserWithJWT = async (email, password) => {
  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord) throw Error('User not found');

  const correctPassword = await argon2.verify(userRecord.password, password);

  if (!correctPassword) throw Error('Incorrect password');

  const userData = {
    id: userRecord.id,
    email: userRecord.email,
    username: userRecord.username,
    role: userRecord.role,
    avatarUrl: userRecord.avatarUrl
  };

  const jwt = generateJWT(userData);

  return { jwt, user: userData };
};

exports.signupUser = async (email, username, password, role, avatarUrl) => {
  const createdUser = await createPasswordUser(
    email,
    username,
    password,
    role,
    avatarUrl
  );

  sendWelcomeSignupEmail(email, username);

  return createdUser;
};

exports.signupDiscordUser = async (email, username) => {
  const createdUser = await createDiscordUser(email, username);

  sendWelcomeSignupEmail(email, username);

  return createdUser;
};

const createPasswordUser = async (
  email,
  username,
  password,
  role,
  avatarUrl
) => {
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

const createDiscordUser = async (email, username) => {
  const user = { email, username, hasDiscordLogin: true };

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

const sendWelcomeSignupEmail = (email, username) => {
  sendEmail({
    subject: 'Welcome to the Challange Board!',
    filename: 'signupEmail',
    user: { email, username }
  });
};
