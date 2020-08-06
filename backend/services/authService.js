const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const generateJWT = payload => {
  const secret = Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64');
  const options = { expiresIn: '6h' };

  return jwt.sign(payload, secret, options);
};

exports.generateJWT;

exports.getParameterByName = (name, url) => {
  const parsedName = name.replace(/[\[\]]/g, '\\$&');

  const regex = new RegExp('[?&]' + parsedName + '(=([^&#]*)|&|#|$)');

  const results = regex.exec(url);

  if (!results) return null;

  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

exports.getStateFromHeader = req => {
  if (req && req.headers) return cookie.parse(req.headers.cookie).state;
};

exports.loginWithJWT = async (email, password) => {
  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord) throw Error('User not found');

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass) throw Error('Incorrect password');

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
