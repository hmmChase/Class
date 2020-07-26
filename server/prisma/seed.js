// run `npm run seed` to seed

const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

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
      password: await argon2.hash('user1', 10),
      name: 'User1',
      email: 'user1@email.com',
      avatarUrl: 'http://picsum.photos/40',
      threads: { create: { body: 'This is a message 1.', isAnswer: true } }
    }
  });

  const user2 = await prisma.user.create({
    data: {
      password: await argon2.hash('user2', 10),
      name: 'User2',
      email: 'user2@email.com',
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
