const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getThreads = async (req, res, next) => {
  // const id = req.params.id;

  console.log('getThreads');

  const threads = await prisma.thread.findMany({ include: { author: true } });

  console.log('threads:', threads);

  res.json(threads);
};
