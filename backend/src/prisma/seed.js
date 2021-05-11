// 'npm run seed' to seed

// const { PrismaClient } = require('@prisma/client');
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
// const argon2 = require('argon2');
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();

const main = async () => {
  const teacher = await prisma.user.create({
    data: {
      email: 'teacher@email.com',
      username: 'Teacher',
      // password: await argon2.hash('teacher', 10),
      password: await bcryptjs.hash('teacher', 10),
      role: 'TEACHER',
      avatarUrl: 'http://picsum.photos/40'
    }
  });

  const student1 = await prisma.user.create({
    data: {
      email: 'student1@email.com',
      username: 'Student 1',
      // password: await argon2.hash('student1', 10),
      password: await bcryptjs.hash('student1', 10),
      role: 'STUDENT',
      avatarUrl: 'http://picsum.photos/40'
      // questions: { create: moreQuestions() }
    }
  });

  const student2 = await prisma.user.create({
    data: {
      email: 'student2@email.com',
      username: 'Student 2',
      // password: await argon2.hash('student2', 10),
      password: await bcryptjs.hash('student2', 10),
      avatarUrl: 'http://picsum.photos/40',
      role: 'STUDENT',
      hasDiscordLogin: true
      // questions: { create: moreQuestions() }
    }
  });

  const challenge1 = await prisma.challenge.create({
    data: {
      path: 'challenge1',
      title: 'Turn any Design into HTML',
      desc:
        'First challenge, turning any design into HTML, and CSS. First challenge, turning any design into HTML, and CSS. First challenge, turning any design into HTML, and CSS.',
      videoUrl:
        'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
      author: { connect: { id: 1 } }
    }
  });

  const challenge2 = await prisma.challenge.create({
    data: {
      path: 'challenge2',
      title: 'Second challenge',
      desc:
        'Quam dolor esse ut. Vel rerum rem eius in deserunt numquam. Ratione repudiandae sint cupiditate. Voluptatem quasi et. Natus libero enim consequatur et aut tempora.',
      videoUrl:
        'https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG',
      author: { connect: { id: 1 } }
    }
  });

  const project1 = await prisma.project.create({
    data: {
      githubLink: 'www.github.com',
      additionalLink: 'www.google.com',
      comments: 'Here is my project',
      challenge: { connect: { id: 1 } },
      author: { connect: { id: 2 } }
    }
  });

  const project2 = await prisma.project.create({
    data: {
      githubLink: 'www.github.com',
      additionalLink: 'www.google.com',
      comments: 'My project is here',
      challenge: { connect: { id: 2 } },
      author: { connect: { id: 3 } }
    }
  });

  for (let i = 1; i <= 10; i++) {
    const twoOrThree = Math.floor(Math.random() * 2) + 2;
    const oneOrTwo = Math.floor(Math.random() * 2) + 1;

    await prisma.question.create({
      data: {
        title: 'seeded question ' + i,
        body:
          'Voluptatem sunt voluptate. Reiciendis vel rerum. Voluptas voluptas numquam. Odit pariatur qui. Quod consequatur inventore. At non consequatur dolore nulla consectetur eveniet illo commodi. Sint commodi possimus mollitia magnam molestiae omnis odio eaque autem. Et nihil fugit aut ab et praesentium minus. Omnis nihil odit commodi et quod voluptates sint a. Nostrum minima odio ut harum. Sunt quia et nisi praesentium et aut est quia.',
        author: { connect: { id: twoOrThree } },
        challenge: { connect: { id: oneOrTwo } }
      }
    });
  }

  const commentAnswer = await prisma.comment.create({
    data: {
      body: `seeded answer`,
      isAnswer: true,
      question: { connect: { id: 1 } },
      author: { connect: { id: 2 } }
    }
  });

  for (let i = 1; i <= 10; i++) {
    const oneThroughFive = Math.floor(Math.random() * 5) + 1;
    const twoOrThree = Math.floor(Math.random() * 2) + 2;

    await prisma.comment.create({
      data: {
        body: `seeded comment ${i}`,
        isAnswer: false,
        question: { connect: { id: oneThroughFive } },
        author: { connect: { id: twoOrThree } }
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

    await prisma.$disconnect();
  });
