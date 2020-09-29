import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

/* GET */

export const getAllProjects = async (req, res, next) => {
  const projectRecords = await prisma.project.findMany({
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(projectRecords);
};

/* POST */

export const create = async (req, res, next) => {
  const { githubLink, additionalLink, comments } = req.body;

  const user = jwt.verify(
    req.cookies.jwt,
    Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64')
  );

  const projectRecord = await prisma.project.create({
    data: {
      githubLink,
      additionalLink,
      comments,
      author: { connect: { id: user.user.id } }
    }
  });

  console.log('projectRecord:', projectRecord);

  return res.json(projectRecord);
};
