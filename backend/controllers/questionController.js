import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getQuestions = async (req, res, next) => {
  const questions = await prisma.question.findMany({
    orderBy: { id: 'desc' },
    include: { author: true, comments: true }
  });

  return res.json(questions);
};

export const getQuestion = async (req, res, next) => {
  const { questionId } = req.params;

  const questions = await prisma.question.findOne({
    where: { id: parseInt(questionId) },
    include: { author: true, comments: true }
  });

  return res.json(questions);
};

export const create = async (req, res, next) => {
  const { body } = req.body;
  const { id } = req.user.user;

  const questionRecord = await prisma.question.create({
    data: { body, author: { connect: { id } } }
  });

  return res.json(questionRecord);
};
