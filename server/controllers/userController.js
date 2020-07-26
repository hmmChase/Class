const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const { generateJWT } = require('../utils/auth');

const prisma = new PrismaClient();

exports.getUsers = async (req, res, next) => {
  // const id = req.params.id;

  const users = await prisma.user.findMany();

  res.json(users);
};

exports.signup = async function (req, res) {
  // take the user data from the req
  const { username, email, password, avatarUrl } = req.body;

  // hash the password
  const hashedPassword = await argon2.hash(password);

  // create the model
  const user = { username, email, password: hashedPassword, avatarUrl };

  const userModel = await prisma.user.create({ data: { user } });

  const createdUser = {
    id: userModel.id,
    username: userModel.username,
    email: userModel.email,
    avatarUrl: userModel.avatarUrl
  };

  // return parts of the created model (username, email, avatarUrl)
  res.json(createdUser);
};

exports.login = async function (req, res) {
  const { email, password } = req.body;

  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord) throw Error('User not found');

  const correctPassword = await argon2.verify(userRecord.password, password);

  if (!correctPassword) throw Error('Incorrect password');

  const user = {
    id: userRecord.id,
    name: userRecord.name,
    email: userRecord.email
  };

  const payload = generateJWT(user);

  const cookieOptions = {
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600000,
    sameSite: 'strict'
  };

  res.cookie('jwt', payload, cookieOptions);

  res.json({
    id: userRecord.id,
    email: userRecord.email,
    name: userRecord.name,
    avatarUrl: userRecord.avatarUrl
  });
};
