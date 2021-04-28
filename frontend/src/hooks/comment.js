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

// const updateComment = async (id, body) => {
//   const response = await commentUpdate({ id, body });

//   setComments(response.data);
// };

export const useCommentUpdate = options =>
  useMutation(variables => commentUpdate(variables), options);

// const deleteComment = async commentId => {
//   await commentDelete({ commentId });

//   const filteredComments = comments.filter(comment => comment.id !== commentId);

//   setComments(filteredComments);
// };

export const useCommentDelete = options =>
  useMutation(variables => commentDelete(variables), options);

// const promoteAnswer = async commentId => {
//   const response = await setAnswer({ commentId });

//   setComments(response.data);
// };

export const usePromoteAnswer = options =>
  useMutation(variables => setAnswer(variables), options);

// const demoteAnswer = async commentId => {
//   const response = await unsetAnswer({ commentId });

//   setComments(response.data);
// };

export const useDemoteAnswer = options =>
  useMutation(variables => unsetAnswer(variables), options);
