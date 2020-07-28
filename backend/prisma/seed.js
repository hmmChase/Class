// run 'npm run seed' to seed

const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

const prisma = new PrismaClient();

const moreThreads = () => {
  const amtThreads = 4;
  const threads = [];

  const randBool = () => Boolean(Math.random() >= 0.5);

  for (let i = 1; i <= amtThreads; i++)
    threads.push({ body: 'seeded question ' + i, isAnswer: randBool() });

  return threads;
};

const main = async () => {
  const teacher = await prisma.user.create({
    data: {
      password: await argon2.hash('teacher', 10),
      name: 'Teacher',
      email: 'teacher@email.com',
      role: 'TEACHER',
      avatarUrl: 'http://picsum.photos/40'
    }
  });

  const student1 = await prisma.user.create({
    data: {
      password: await argon2.hash('student1', 10),
      name: 'Student 1',
      email: 'student1@email.com',
      role: 'STUDENT',
      avatarUrl: 'http://picsum.photos/40',
      threads: { create: moreThreads() }
    }
  });

  const student2 = await prisma.user.create({
    data: {
      password: await argon2.hash('student2', 10),
      name: 'Student 2',
      email: 'student2@email.com',
      role: 'STUDENT',
      avatarUrl: 'http://picsum.photos/40',
      threads: { create: moreThreads() }
    }
  });

  console.log({ teacher, student1, student2 });
};

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
