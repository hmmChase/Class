import instance from './baseApi';
import { useQuery, useMutation } from 'react-query';

/* POST */

const createQuestion = async options => {
  console.log('options:', options);

  const newQuestion = { title: options.title, body: options.body };

  await instance.post(`/question/create/${options.challengePath}`, newQuestion);
};

export const useCreateQuestion = variables => {
  console.log('variables:', variables);

  return useMutation(createQuestion, variables);
};
