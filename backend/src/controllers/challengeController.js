import prisma from '../../prisma/prisma.js';

/* GET */

export const getAllChallenges = async (req, res, next) => {
  const challenges = await prisma.challenge.findMany({});

  return res.json(challenges);
};

export const getChallenge = async (req, res, next) => {
  const { challengePath } = req.params;

  const challenge = await prisma.challenge.findUnique({
    where: { path: challengePath }
  });

  return res.json(challenge);
};

/* POST */

export const create = async (req, res, next) => {
  const { tite, desc } = req.body;
  const { id } = req.user.user;

  const challengeRecord = await prisma.challege.create({
    data: { tite, desc, author: { connect: { id } } }
  });

  return res.json(challengeRecord);
};
