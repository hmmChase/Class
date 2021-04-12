import { useQuery, useMutation } from 'react-query';
import { getChallenges, getChallenge } from '../api/challengeApi';
import {
  getComments,
  commentCreate,
  commentUpdate,
  commentDelete,
  setAnswer,
  unsetAnswer
} from '../api/commentApi';
import { getQuestions } from '../api/questionApi';

// challenges

export const useGetChallenges = options => {
  return useQuery('challenges', () => getChallenges, options);
};

export const useGetChallenge = options => {
  return useQuery(
    ['challenge', options.variables],
    () => getChallenge(options.variables),
    options
  );
};

// comments

export const useGetComments = options => {
  return useQuery(
    ['challenge', options.variables],
    () => getComments(options.variables),
    options
  );
};

export const useCommentCreate = options => {
  return useMutation(
    // ['challenge', options.variables],
    () => commentCreate(options.variables),
    options
  );
};

export const useCommentUpdate = options => {
  return useQuery(
    ['challenge', options.variables],
    () => commentUpdate(options.variables),
    options
  );
};

export const useCommentDelete = options => {
  return useQuery(
    ['challenge', options.variables],
    () => commentDelete(options.variables),
    options
  );
};

export const useSetAnswer = options => {
  return useQuery(
    ['challenge', options.variables],
    () => setAnswer(options.variables),
    options
  );
};

export const useUnsetAnswer = options => {
  return useQuery(
    ['challenge', options.variables],
    () => unsetAnswer(options.variables),
    options
  );
};

// questions

export const useGetQuestions = options =>
  useQuery(
    ['questions', options.variables],
    () => getQuestions(options.variables),
    options
  );
