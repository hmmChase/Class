const crypto = require('crypto');
const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const authService = require('../services/authService');
const { sendEmail } = require('../handlers/emailHandler');
const COOKE_CONFIG = require('../config').COOKIE_CONFIG;

const prisma = new PrismaClient();

exports.getUsers = async (req, res, next) => {
  const users = await prisma.user.findMany();

  res.json(users);
};

exports.signupUser = async function (req, res) {
  const { username, email, password, role, avatarUrl } = req.body;

  const createdUser = authService.signupUser(
    email,
    username,
    password,
    role,
    avatarUrl
  );

  // const { jwt, user } = authService.loginUserWithJWT(email, password);

  // res.cookie('jwt', jwt, COOKIE_CONFIG);

  // return res.json(user);

  return res.json(createdUser);
};

exports.loginUser = async function (req, res) {
  const { email, password } = req.body;

  const { jwt, user } = authService.loginUserWithJWT(email, password);

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};

exports.generatePasswordReset = async (req, res) => {
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
  const resetPasswordUrl = `http://${req.headers.host}/users/password-reset/${resetPassToken}`;

  sendEmail({
    subject: 'Password Reset for the Challenge Board',
    filename: 'resetPassEmail',
    user: { email },
    resetPasswordUrl
  });

  return res.json({ message: emailSentMessage });
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const userRecord = await prisma.user.findOne({
    where: {
      resetPasswordToken: token,
      resetPasswordExpiry: {
        // if the expiration is after right now, it's valid
        gt: Date.now()
      }
    }
  });

  const tokenInvalidMessage =
    'Token not found or expired. Try resetting your password again.';

  if (!userRecord) return res.json({ message: tokenInvalidMessage });

  // hash the password
  const hashedPassword = await argon2.hash(password);

  // update the record
  userRecord.update({ password: hashedPassword });

  // log them back in
  const { jwt, user } = authService.loginUserWithJWT(email, password);

  res.cookie('jwt', jwt, COOKIE_CONFIG);

  return res.json(user);
};
