const crypto = require('crypto');
const argon2 = require('argon2');
const { PrismaClient } = require('@prisma/client');
const { generateJWT } = require('../utils/auth');
const { sendEmail } = require('../handlers/emailHandler');

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

  sendEmail({
    subject: 'Welcome to the Challange Board.',
    filename: 'signupEmail',
    user: { name, email }
  });

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

  res.json({ ...user, avatarUrl: userRecord.avatarUrl });
};

exports.generatePasswordReset = async (req, res) => {
  const { email } = req.body;

  // if can find email, begin reset flow
  const userRecord = await prisma.user.findOne({ where: { email } });

  const emailSentMessage = 'An email has been sent to the specified address';

  if (!userRecord) {
    // don't tell them the user doesn't exist!!
    res.json({ message: emailSentMessage });
  } else {
    // generate token and expiry, set it on user row
    const resetPassToken = crypto.randomBytes(25).toString('hex');
    const resetPassTokenExpiry = Date.now() + 1000 * 60 * 60; // 1 hour

    await prisma.user.update(
      { resetPassToken, resetPassTokenExpiry },
      { where: { email: userRecord.email } }
    );

    // send email with reset password in a link
    // TODO: https if prod
    const resetPasswordUrl = `http://${req.headers.host}/users/password-reset/${resetToken}`;

    emailHandler.sendEmail({
      subject: 'Password Reset for Message Boardia',
      filename: 'resetPassEmail',
      user: { email },
      resetPasswordUrl
    });

    res.json({ message: emailSentMessage });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const userRecord = await prisma.user.findOne({
    where: {
      resetPasswordToken: token,
      resetPasswordExpiry: {
        // [Op.gt]: Date.now() // if the expiration is after right now, it's valid
        gt: Date.now()
      }
    }
  });

  const tokenInvalidMessage =
    'Token not found or expired. Try resetting your password again';

  if (!userRecord) return res.json({ message: tokenInvalidMessage });

  // hash the password
  const hashedPassword = await argon2.hash(password);

  // update the record
  userRecord.update({ password: hashedPassword });

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

  // log them back in
  res.cookie('jwt', payload, cookieOptions);

  res.json({ ...user, avatarUrl: userRecord.avatarUrl });
};
