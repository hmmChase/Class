import { useQuery, useMutation } from 'react-query';
import {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from '../api/questionApi';

// Queries

export const useGetQuestions = options =>
  useQuery(
    ['questions', options.variables],
    () => getQuestions(options.variables),
    options
  );

export const useGetQuestion = options =>
  useQuery(
    ['question', options.variables],
    () => getQuestion(options.variables),
    options
  );

// Mutations

export const useQuestionCreate = options =>
  useMutation(variables => createQuestion(variables), options);

export const useQuestionUpdate = options =>
  useMutation(variables => updateQuestion(variables), options);

export const useQuestionDelete = options =>
  useMutation(variables => deleteQuestion(variables), options);
