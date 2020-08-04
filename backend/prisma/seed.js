// run 'npm run seed' to seed

const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

const prisma = new PrismaClient();

const moreQuestions = () => {
  const amtQuestions = 5;
  const questions = [];

  for (let i = 1; i <= amtQuestions; i++)
    questions.push({ body: 'seeded question ' + i });

  return questions;
};

// const moreReplies = () => {
//   const amtReplies = 20;
//   const replies = [];

//   for (let i = 1; i <= amtReplies; i++)
//     replies.push({ body: 'seeded reply ' + i });

//   return questions;
// };

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

  const reply1 = await prisma.reply.create({
    data: {
      body: 'seeded reply 1',
      author: { connect: { id: 1 } },
      question: { connect: { id: 1 } }
    }
  });

  console.log({ teacher, student1, student2, reply1 });
};

//   +   question: {
//   +     create?: QuestionCreateWithoutRepliesInput,
//   +     connect?: QuestionWhereUniqueInput
//   +   },
//   +   author: {
//   +     create?: UserCreateWithoutRepliesInput,
//   +     connect?: UserWhereUniqueInput
//   +   },

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
