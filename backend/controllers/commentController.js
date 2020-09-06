import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

/* GET */

export const getAllComments = async (req, res, next) => {
  const comments = await prisma.comment.findMany({});

  return res.json(comments);
};

export const getComment = async (req, res, next) => {
  const { commentId } = req.params;

  const comment = await prisma.comment.findOne({ where: { id: commentId } });

  return res.json(comment);
};

// export const getCommentsForQuestion = async (req, res, next) => {
//   const { questionId } = req.params;

//   const comments = await prisma.comment.findMany({
//     where: { question: { id: parseInt(questionId) } },
//     orderBy: { id: 'desc' },
//     include: { author: true }
//   });

//   return res.json(comments);
// };

export const getQuestionComments = async (req, res, next) => {
  const { questionId } = req.params;

  const questions = await prisma.comment.findMany({
    where: { question: { id: parseInt(questionId) }, deletedAt: null },
    include: { author: true }
  });

  return res.json(questions);
};

/* POST */

export const create = async (req, res, next) => {
  const { questionId, body } = req.body;

  const user = jwt.verify(
    req.cookies.jwt,
    Buffer.from(process.env.ACCESS_TOKEN_SECRET, 'base64')
  );

  const commentRecord = await prisma.comment.create({
    data: {
      author: { connect: { id: user.user.id } },
      question: { connect: { id: parseInt(questionId) } },
      body
    },
    include: { author: true }
  });

  return res.json(commentRecord);
};

export const deleteSoft = async (req, res, next) => {
  const { commentId } = req.body;

  const commentRecord = await prisma.comment.update({
    where: { id: commentId },
    data: { deletedAt: new Date().toISOString() }
  });

  return res.json(commentRecord);
};

export const answer = async (req, res, next) => {
  const { commentId } = req.body;

  const commentRecord = await prisma.comment.update({
    where: { id: commentId },
    data: { isAnswer: true }
  });

  return res.json(commentRecord);
};
