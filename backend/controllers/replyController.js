const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getReplies = async (req, res, next) => {
  const replies = await prisma.reply.findMany({
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(replies);
};

exports.create = async function (req, res, next) {
  const { authorId, questionID, body } = req.body;

  const replyRecord = await prisma.reply.create({
    data: {
      author: { connect: { id: authorId } },
      question: { connect: { id: questionID } },
      body
    }
  });

  return res.json(replyRecord);
};
