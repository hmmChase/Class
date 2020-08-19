// run 'npm run seed' to seed

const { PrismaClient } = require('@prisma/client');
const argon2 = require('argon2');

const prisma = new PrismaClient();

const moreQuestions = () => {
  const amtQuestions = 5;
  const questions = [];

  for (let i = 1; i <= amtQuestions; i++)
    questions.push({
      title: 'seeded question ' + i,
      body: 'this is a question'
    });

  return questions;
};

const main = async () => {
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@email.com',
      username: 'Teacher',
      password: await argon2.hash('teacher', 10),
      role: 'TEACHER',
      avatarUrl: 'http://picsum.photos/40'
    }
  });

  const student1 = await prisma.user.create({
    data: {
      email: 'student1@email.com',
      username: 'Student 1',
      password: await argon2.hash('student1', 10),
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
      avatarUrl: 'http://picsum.photos/40',
      role: 'STUDENT',
      hasDiscordLogin: true,
      questions: { create: moreQuestions() }
    }
  });

  const challenge1 = await prisma.challenge.create({
    data: {
      title: 'Turn any Design into HTML',
      body: `First challenge, turning any design into HTML, and CSS. First challenge,
      turning any design into HTML, and CSS. First challenge, turning any
      design into HTML, and CSS.`,
      videoUrl:
        'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
      author: { connect: { id: 1 } }
    }
  });

  const project1 = await prisma.project.create({
    data: {
      githubLink: 'www.github.com',
      additionalLink: 'www.google.com',
      body: 'Here is my project',
      author: { connect: { id: 2 } }
    }
  });

  for (let i = 1; i <= 10; i++) {
    await prisma.comment.create({
      data: {
        body: `seeded comment ${i}`,
        isAnswer: Math.random() >= 0.8,
        question: { connect: { id: 1 } },
        author: { connect: { id: 2 } }
      }
    });
  }

  // console.log({ teacher, student1, student2 });
};

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    console.log('Seeding complete.');

    await prisma.disconnect();
  });
