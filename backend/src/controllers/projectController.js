// import { PrismaClient } from '@prisma/client';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
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

export const getChallengeProjects = async (req, res, next) => {
  const { challengePath } = req.params;

  const projects = await prisma.project.findMany({
    where: { challenge: { path: challengePath }, deletedAt: null },
    include: { author: true },
    orderBy: { id: 'desc' }
  });

  return res.json(projects);
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

  return res.json(projectRecord);
};
