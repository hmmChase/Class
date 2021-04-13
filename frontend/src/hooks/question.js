import { useQuery, useMutation } from 'react-query';
import { getQuestions, createQuestion } from '../api/questionApi';

export const useGetQuestions = options =>
  useQuery(
    ['questions', options.variables],
    () => getQuestions(options.variables),
    options
  );

export const useQuestionCreate = options =>
  useMutation(variables => createQuestion(variables), options);
