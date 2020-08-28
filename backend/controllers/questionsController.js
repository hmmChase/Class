import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllQuestions = async (req, res, next) => {
  const questions = await prisma.question.findMany({});

  return res.json(questions);
};

// orderBy: { id: 'desc' }
// include: { author: true, comments: true }

export const getChallengeQuestions = async (req, res, next) => {
  const { challengePath } = req.params;

  const questions = await prisma.question.findMany({
    where: { challenge: { path: challengePath } },
    include: { author: true, comments: true }
  });

  return res.json(questions);
};

// orderBy: { id: 'desc' }
