import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getChallenge = async (req, res, next) => {
  const { challengePath } = req.params;

  console.log('getChallenge challengePath: ', challengePath);

  const challenge = await prisma.challenge.findOne({
    where: { path: challengePath }

    // include: { author: true, comments: true }
  });

  return res.json(challenge);
};

export const getChallengeQuestions = async (req, res, next) => {
  const { challengePath } = req.params;

  console.log('getChallengeQuestions challengePath: ', challengePath);

  const questions = await prisma.challenge.findMany({
    where: { challenge: { path: parseInt(challengePath) } }
  });

  console.log('getChallengeQuestions: ', questions);

  return res.json(questions);
};

export const create = async (req, res, next) => {
  const { tite, desc } = req.body;
  const { id } = req.user.user;

  const challengeRecord = await prisma.challege.create({
    data: { tite, desc, author: { connect: { id } } }
  });

  return res.json(challengeRecord);
};

// export const getChallengeQuestion = async (req, res, next) => {
//   const { challengePath } = req.params;

//   console.log('getChallengeQuestions challengePath: ', challengePath);

//   const questions = await prisma.challenge.findOne({
//     where: { challenge: { path: parseInt(challengePath) } }
//   });

//   console.log('getChallengeQuestions: ', questions);

//   return res.json(questions);
// };
