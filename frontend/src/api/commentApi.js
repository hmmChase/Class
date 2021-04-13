import instance from './baseApi';

/* GET */

export const getComments = async variables =>
  await instance.get(`/comment/question/${variables.questionId}`);

/* POST */

export const commentCreate = async variables =>
  await instance.post('/comment/create', variables);

export const commentUpdate = async variables =>
  await instance.post('/comment/update', variables);

export const commentDelete = async variables =>
  await instance.post('/comment/delete-soft', variables);

export const setAnswer = async variables =>
  await instance.post('/comment/answer-promote', variables);

export const unsetAnswer = async variables =>
  await instance.post('/comment/answer-demote', variables);
