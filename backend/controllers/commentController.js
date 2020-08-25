import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getComments = async (req, res, next) => {
  const { questionId } = req.params;

  const comments = await prisma.comment.findMany({
    where: { question: { id: parseInt(questionId) } },
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(comments);
};

export const create = async (req, res, next) => {
  const { questionId, body } = req.body;
  const { id } = req.user.user;

  const commentRecord = await prisma.comment.create({
    data: {
      author: { connect: { id } },
      question: { connect: { id: questionId } },
      body
    }
  });

  return res.json(commentRecord);
};

export const answer = async (req, res, next) => {
  const { questionId, body } = req.body;
  const { id } = req.user.user;

  const commentRecord = await prisma.comment.create({
    data: {
      author: { connect: { id } },
      question: { connect: { id: questionId } },
      body
    }
  });

  return res.json(commentRecord);
};

export const answerCount = async (req, res, next) => {
  const { questionId, body } = req.body;
  const { id } = req.user.user;

  const commentRecord = await prisma.comment.count({
    data: {
      author: { connect: { id } },
      question: { connect: { id: questionId } },
      body
    }
  });

  return res.json(commentRecord);
};
