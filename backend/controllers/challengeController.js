import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/* GET */

export const getAllChallenges = async (req, res, next) => {
  const challenges = await prisma.challenge.findMany({});

  return res.json(challenges);
};

export const getChallenge = async (req, res, next) => {
  const { challengeId } = req.params;

  const challenge = await prisma.challenge.findOne({
    where: { id: challengeId }
  });

  return res.json(challenge);
};

export const getChallengeByPath = async (req, res, next) => {
  const { challengePath } = req.params;

  const challenge = await prisma.challenge.findOne({
    where: { path: challengePath }
  });

  return res.json(challenge);
};

// export const getChallengeQuestions = async (req, res, next) => {
//   const { challengePath } = req.params;

//   const questions = await prisma.challenge.findMany({
//     where: { challenge: { path: challengePath } }
//   });

//   return res.json(questions);
// };

/* POST */

export const create = async (req, res, next) => {
  const { tite, desc } = req.body;
  const { id } = req.user.user;

  const challengeRecord = await prisma.challege.create({
    data: { tite, desc, author: { connect: { id } } }
  });

  return res.json(challengeRecord);
};
