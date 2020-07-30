const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getThreads = async (req, res, next) => {
  const threads = await prisma.thread.findMany({ include: { author: true } });

  return res.json(threads);
};

exports.create = async function (req, res, next) {
  const { authorId, body } = req.body;

  const threadModel = await prisma.thread.create({
    data: { body: body, author: { connect: { id: authorId } } }
  });

  return res.json(threadModel);
};
