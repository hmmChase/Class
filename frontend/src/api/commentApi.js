import instance from './baseApi';
// import { useQuery, useMutation } from 'react-query';

/* GET */

export const getComments = async questionId =>
  await instance.get(`/comment/question/${questionId}`);

/* POST */

export const commentCreate = async options =>
  await instance.post('/comment/create', options);

export const commentUpdate = async options =>
  await instance.post('/comment/update', options);

export const commentDelete = async options =>
  await instance.post('/comment/delete-soft', options);

export const setAnswer = async options =>
  await instance.post('/comment/answer-promote', options);

export const unsetAnswer = async options =>
  await instance.post('/comment/answer-demote', options);
