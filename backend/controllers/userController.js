const crypto = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const isEmail = require('isemail');
const authService = require('../services/authService');
const userService = require('../services/userService');
const emailHandler = require('../handlers/emailHandler');
const { COOKIE_CONFIG, BASE_URL } = require('../config');

const prisma = new PrismaClient();

exports.getCurrentUser = async (req, res) => {
  const { id } = req.user.user;

  try {
    const userRecord = await prisma.user.findOne({ where: { id } });

    if (!userRecord) return req.status(404).json({ error: 'user.notFound' });

    const userJWT = { user: { id: userRecord.id } };

    const newJWT = authService.generateJWT(userJWT);

    const userClient = authService.userClientCleaner(userRecord);

    res.cookie('jwt', newJWT, COOKIE_CONFIG);

    return res.json(userClient);
  } catch (error) {
    return res.json({});
  }

  // return res.json(user);
};

exports.signup = async (req, res) => {
  const { email, password, username, role, avatarUrl } = req.body;

  const notString = typeof email !== 'string';
  if (notString) return res.status(400).json({ error: 'signup.notString' });

  const emailNormalized = email.trim().toLowerCase();

  const isvalid = isEmail.validate(email);

  if (!isvalid) return res.status(400).json({ error: 'signup.invalidEmail' });

  const createdUser = userService.signupUserByEmail(
    emailNormalized,
    password,
    username,
    role,
    avatarUrl
  );

  const { jwt, user } = userService.loginWithEmail(email, password);

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const userRecord = await prisma.user.findOne({ where: { email } });

  if (!userRecord)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const isCorrectPass = await argon2.verify(userRecord.password, password);

  if (!isCorrectPass)
    return res.status(401).json({ error: 'login.invalidCredentials' });

  const userJWT = { user: { id: userRecord.id } };

  const newJWT = authService.generateJWT(userJWT);

  const userClient = authService.userClientCleaner(userRecord);

  // const { newJWT, userClient } = await userService.loginWithEmail(res, email, password);

  res.cookie('jwt', newJWT, COOKIE_CONFIG);

  return res.json(userClient);
};

exports.generatePassReset = async (req, res) => {
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
  // TODO: https if prod
  // const resetPasswordUrl = `http://${req.headers.host}/users/password-reset/${resetPassToken}`;

  const resetPasswordUrl = `${BASE_URL}/reset-password?resetToken=${resetPassToken}`;

  emailHandler.sendEmailPasswordReset(email, resetPasswordUrl);

  return res.json({ message: emailSentMessage });
};

exports.resetPassword = async (req, res) => {
  const { resetToken } = req.params;

  const { newPassword } = req.body;

  const userRecord = await prisma.user.findOne({
    where: {
      resetPassToken: resetToken
      // resetPassTokenExpiry: {
      //   // if the expiration is after right now, it's valid
      //   gt: Date.now()
      // }
    }
  });

  const isTokenExpired = Date.now() > userRecord.resetPassTokenExpiry;

  const tokenInvalidMessage =
    'Reset token not found or expired. Try resetting your password again.';

  if (!userRecord || isTokenExpired)
    return res.json({ message: tokenInvalidMessage });

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
  const { jwt, user } = await userService.loginWithEmail(
    updatedUser.email,
    newPassword
  );

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};

// exports.getUsers = async (req, res, next) => {
//   const users = await prisma.user.findMany();

//   res.json(users);
// };
