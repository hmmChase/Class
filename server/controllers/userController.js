var { PrismaClient } = require('@prisma/client');

var prisma = new PrismaClient();

exports.getUsers = (req, res, next) => {
  // const id = req.params.id;

  const users = prisma.user.findMany();

  console.log('users:', users);

  res.json([
    {
      id: 1,
      createdAt: new Date('1/1/2020'),
      name: 'Jay',
      avatarUrl: 'http://picsum.photos/40'
    },
    {
      id: 2,
      createdAt: new Date('1/2/2020'),
      name: 'Morgan',
      avatarUrl: 'http://picsum.photos/40'
    }
  ]);
};
