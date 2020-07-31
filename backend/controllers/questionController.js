const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getQuestions = async (req, res, next) => {
  const questions = await prisma.question.findMany({
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(questions);
};

exports.create = async function (req, res, next) {
  const { authorId, body } = req.body;

  const questionModel = await prisma.question.create({
    data: { body: body, author: { connect: { id: authorId } } }
  });

  return res.json(questionModel);
};
