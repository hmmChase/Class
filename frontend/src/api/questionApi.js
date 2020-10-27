import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* GET */

export const getQuestion = async questionId =>
  await instance.get(`/question/${questionId}`);

const getQuestions = async (_key, variables) =>
  await instance.get(`/question/challenge/${variables.challengePath}`);
export const useGetQuestions = config =>
  useQuery(['getQuestions', config.variables], getQuestions, config);

/* POST */

export const deleteQuestion = async commentId =>
  await instance.post('/question/delete-soft', commentId);

const createQuestion = async options => {
  const newQuestion = { title: options.title, body: options.body };

  await instance.post(`/question/create/${options.challengePath}`, newQuestion);
};

export const useCreateQuestion = variables =>
  useMutation(createQuestion, variables);
