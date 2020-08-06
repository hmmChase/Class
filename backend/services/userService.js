const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const emailHandler = require('../handlers/emailHandler');

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
