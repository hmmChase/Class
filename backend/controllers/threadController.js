const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getThreads = async (req, res, next) => {
  // const id = req.params.id;

  const threads = await prisma.thread.findMany({ include: { author: true } });

  res.json(threads);
};
