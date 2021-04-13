import { useQuery, useMutation } from 'react-query';
import {
  getComments,
  commentCreate,
  commentUpdate,
  commentDelete,
  setAnswer,
  unsetAnswer
} from '../api/commentApi';

export const useGetComments = options => {
  return useQuery(
    ['challenge', options.variables],
    () => getComments(options.variables),
    options
  );
};

export const useCommentCreate = options => {
  return useMutation(
    ['challenge', options.variables],
    () => commentCreate(options.variables),
    options
  );
};

// const updateComment = async (id, body) => {
//   const response = await commentUpdate({ id, body });

//   setComments(response.data);
// };

export const useCommentUpdate = options => {
  return useQuery(
    ['challenge', options.variables],
    () => commentUpdate(options.variables),
    options
  );
};

// const deleteComment = async commentId => {
//   await commentDelete({ commentId });

//   const filteredComments = comments.filter(comment => comment.id !== commentId);

//   setComments(filteredComments);
// };

export const useCommentDelete = options => {
  return useQuery(
    ['challenge', options.variables],
    () => commentDelete(options.variables),
    options
  );
};

// const promoteAnswer = async commentId => {
//   const response = await setAnswer({ commentId });

//   setComments(response.data);
// };

export const usePromoteAnswer = options => {
  return useQuery(
    ['challenge', options.variables],
    () => setAnswer(options.variables),
    options
  );
};

// const demoteAnswer = async commentId => {
//   const response = await unsetAnswer({ commentId });

//   setComments(response.data);
// };

export const useDemoteAnswer = options => {
  return useQuery(
    ['challenge', options.variables],
    () => unsetAnswer(options.variables),
    options
  );
};
