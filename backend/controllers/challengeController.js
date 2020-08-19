const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getChallenges = async (req, res, next) => {
  const challenges = await prisma.challenge.findMany({});

  return res.json(challenges);
};
