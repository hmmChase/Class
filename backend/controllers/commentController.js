const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getComments = async (req, res, next) => {
  const comments = await prisma.comment.findMany({
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(comments);
};

exports.create = async (req, res, next) => {
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

exports.answer = async (req, res, next) => {
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

exports.answerCount = async (req, res, next) => {
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
