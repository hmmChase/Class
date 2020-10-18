import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

/* GET */

export const getAllQuestions = async (req, res, next) => {
  const questionRecords = await prisma.question.findMany({});

  return res.json(questionRecords);
};

export const getQuestion = async (req, res, next) => {
  const { questionId } = req.params;

  const questionRecord = await prisma.question.findOne({
    where: { id: parseInt(questionId) },
    include: { author: true }
  });

  return res.json(questionRecord);
};

export const getChallengeQuestions = async (req, res, next) => {
  const { challengePath } = req.params;

  const questions = await prisma.question.findMany({
    where: { challenge: { path: challengePath }, deletedAt: null },
    include: { author: true, comments: { where: { deletedAt: null } } },
    orderBy: { id: 'desc' }
  });

  return res.json(questions);
};

/* POST */

export const create = async (req, res, next) => {
  const { challengePath, title, body } = req.body;

  console.log('req.body:', req.body);

  // const { challengePath } = req.params;

  const user = jwt.verify(
    req.cookies.jwt,
    Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64')
  );

  const questionRecord = await prisma.question.create({
    data: {
      title,
      body,
      author: { connect: { id: user.user.id } },
      challenge: { connect: { path: challengePath } }
    },
    include: { author: true, comments: { where: { deletedAt: null } } }
  });

  return res.json(questionRecord);
};

export const deleteSoft = async (req, res, next) => {
  const { questionId } = req.body;

  const questionRecord = await prisma.question.update({
    where: { id: parseInt(questionId) },
    data: { deletedAt: new Date().toISOString() }
  });

  return res.json(questionRecord);
};
