var { PrismaClient } = require('@prisma/client');

var prisma = new PrismaClient();

exports.getThreads = (req, res, next) => {
  // const id = req.params.id;

  const threads = prisma.thread.findMany();

  console.log('threads:', threads);

  res.json([
    {
      id: 1,
      createdAt: new Date('1/7/2020'),
      author: { id: 1, name: 'Jay', avatarUrl: 'http://picsum.photos/40' },
      body: 'This is a really short message',
      isAnswer: false
    },
    {
      id: 2,
      createdAt: new Date('1/8/2020'),
      author: { id: 2, name: 'Morgan', avatarUrl: 'http://picsum.photos/40' },
      body: 'This is a really short reply',
      isAnswer: true
    }
  ]);
};
