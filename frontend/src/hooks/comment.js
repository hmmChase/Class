import { useQuery, useMutation } from 'react-query';
import {
  getComments,
  commentCreate,
  commentUpdate,
  commentDelete,
  setAnswer,
  unsetAnswer
} from '../api/commentApi';

// Queries

export const useGetComments = options =>
  useQuery(
    ['comments', options.variables],
    () => getComments(options.variables),
    options
  );

// Mutations

export const useCommentCreate = options =>
  useMutation(variables => commentCreate(variables), options);

export const useCommentUpdate = options =>
  useMutation(variables => commentUpdate(variables), options);

export const useCommentDelete = options =>
  useMutation(variables => commentDelete(variables), options);

export const usePromoteAnswer = options =>
  useMutation(variables => setAnswer(variables), options);

export const useDemoteAnswer = options =>
  useMutation(variables => unsetAnswer(variables), options);
