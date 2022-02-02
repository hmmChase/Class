import jwt from 'jsonwebtoken';

import prisma from '../../prisma/prisma.js';

/* GET */

export const getAllComments = async (req, res, next) => {
  const comments = await prisma.comment.findMany({});

  return res.json(comments);
};

export const getComment = async (req, res, next) => {
  const { commentId } = req.params;

  const comment = await prisma.comment.findUnique({ where: { id: commentId } });

  return res.json(comment);
};

export const getQuestionComments = async (req, res, next) => {
  const { questionId } = req.params;
  console.log('questionId:', questionId);

  const comments = await prisma.comment.findMany({
    where: { question: { id: parseInt(questionId) }, deletedAt: null },
    include: { author: true },
    orderBy: { createdAt: 'asc' }
  });

  return res.json(comments);
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

export const answerPromote = async (req, res, next) => {
  const { commentId } = req.body;

  const commentRecord = await prisma.comment.update({
    where: { id: commentId },
    data: { isAnswer: true }
  });

  const updatedComments = await prisma.comment.findMany({
    where: {
      question: { id: parseInt(commentRecord.question_id) },
      deletedAt: null
    },
    include: { author: true }
  });

  return res.json(updatedComments);
};

export const answerDemote = async (req, res, next) => {
  const { commentId } = req.body;

  const commentRecord = await prisma.comment.update({
    where: { id: commentId },
    data: { isAnswer: false }
  });

  const updatedComments = await prisma.comment.findMany({
    where: {
      question: { id: parseInt(commentRecord.question_id) },
      deletedAt: null
    },
    include: { author: true }
  });

  return res.json(updatedComments);
};

/* PATCH */

export const update = async (req, res, next) => {
  const { id, body } = req.body;

  const commentRecord = await prisma.comment.update({
    where: { id },
    data: { body }
  });

  const updatedComments = await prisma.comment.findMany({
    where: {
      question: { id: parseInt(commentRecord.question_id) },
      deletedAt: null
    },
    include: { author: true },
    orderBy: { createdAt: 'asc' }
  });

  return res.json(updatedComments);
};
