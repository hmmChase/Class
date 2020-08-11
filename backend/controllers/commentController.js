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
  const { authorId, questionID, body } = req.body;

  const commentRecord = await prisma.comment.create({
    data: {
      author: { connect: { id: authorId } },
      question: { connect: { id: questionID } },
      body
    }
  });

  return res.json(commentRecord);
};
