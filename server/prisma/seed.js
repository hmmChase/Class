// run `npm run seed` to seed

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const moreThreads = () => {
  const amtThreads = 10;
  const threads = [];

  const randBool = () => Boolean(Math.random() >= 0.5);

  for (let i = 1; i < amtThreads; i++)
    threads.push({ body: 'seeded question ' + i, isAnswer: randBool() });

  return threads;
};

const main = async () => {
  const user1 = await prisma.user.create({
    data: {
      name: 'Jay',
      avatarUrl: 'http://picsum.photos/40',
      threads: { create: { body: 'This is a message 1.', isAnswer: true } }
    }
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Morgan',
      avatarUrl: 'http://picsum.photos/40',
      threads: { create: moreThreads() }
    }
  });

  console.log({ user1, user2 });
};

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
