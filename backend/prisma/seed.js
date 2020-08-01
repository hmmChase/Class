// run 'npm run seed' to seed

const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

const prisma = new PrismaClient();

const moreQuestions = () => {
  const amtQuestions = 4;
  const questions = [];

  const randBool = () => Boolean(Math.random() >= 0.5);

  for (let i = 1; i <= amtQuestions; i++)
    questions.push({ body: 'seeded question ' + i, isAnswer: randBool() });

  return questions;
};

const main = async () => {
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@email.com',
      username: 'Teacher',
      password: await argon2.hash('teacher', 10),
      name: 'Teacher',
      role: 'TEACHER',
      avatarUrl: 'http://picsum.photos/40'
    }
  });

  const student1 = await prisma.user.create({
    data: {
      email: 'student1@email.com',
      username: 'Student 1',
      password: await argon2.hash('student1', 10),
      name: 'Student 1',
      role: 'STUDENT',
      avatarUrl: 'http://picsum.photos/40',
      questions: { create: moreQuestions() }
    }
  });

  const student2 = await prisma.user.create({
    data: {
      email: 'student2@email.com',
      username: 'Student 2',
      password: await argon2.hash('student2', 10),
      name: 'Student 2',
      role: 'STUDENT',
      avatarUrl: 'http://picsum.photos/40',
      questions: { create: moreQuestions() }
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
