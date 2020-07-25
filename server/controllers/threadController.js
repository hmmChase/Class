var { PrismaClient } = require('@prisma/client');

var prisma = new PrismaClient();

exports.getThreads = async (req, res, next) => {
  // const id = req.params.id;

  const threads = await prisma.thread.findMany({ include: { author: true } });

  res.json(threads);
};
