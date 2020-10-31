import React, { useState } from 'react';
import { CommentContext } from './contexts';
import * as api from '../api/commentApi';

const CommentProvider = props => {
  const [comments, setComments] = useState([]);

  const getComments = async questionId => {
    const response = await api.getComments(questionId);

    setComments(response.data);
  };

  const createComment = async (questionId, body) => {
    const response = await api.commentCreate({ questionId, body });

    const updatedComments = [...comments, response.data];

    setComments(updatedComments);
  };

  const updateComment = async (id, body) => {
    const response = await api.commentUpdate({ id, body });

    setComments(response.data);
  };

  const deleteComment = async commentId => {
    await api.commentDelete({ commentId });

    const filteredComments = comments.filter(
      comment => comment.id !== commentId
    );

    setComments(filteredComments);
  };

  const promoteAnswer = async commentId => {
    const response = await api.setAnswer({ commentId });

    setComments(response.data);
  };

  const demoteAnswer = async commentId => {
    const response = await api.unsetAnswer({ commentId });

    setComments(response.data);
  };

  return (
    <CommentContext.Provider
      value={{
        comments,
        getComments,
        createComment,
        updateComment,
        deleteComment,
        promoteAnswer,
        demoteAnswer
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
