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
    where: { challenge: { path: challengePath } },
    include: { author: true, comments: true }
  });

  return res.json(questions);
};

/* POST */

export const create = async (req, res, next) => {
  const { title, body } = req.body;
  const { challengePath } = req.params;

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
    }
  });

  return res.json(questionRecord);
};

export const deleteSoft = async (req, res, next) => {
  const { questionId } = req.body;

  const questionRecord = await prisma.question.delete({
    where: { id: questionId },
    data: { deletedAt: Date.now() }
  });

  return res.json(questionRecord);
};
