var { PrismaClient } = require('@prisma/client');
var { generateJWT } = require('../utils/auth');

var prisma = new PrismaClient();

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

  const user = { id: user.id, username: user.username, email: user.email };

  res.cookie('jwt', generateJWT(user), { httpOnly: true, maxAge: 3600000 });

  res.json({
    id: userRecord.id,
    email: userRecord.email,
    username: userRecord.username,
    avatarUrl: userRecord.avatarUrl
  });
};
