import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Thread.style';

const Thread = props => (
  <sc.Container>
    <sc.Author>{props.authorName}</sc.Author>

    <sc.Created>{props.createdAt}</sc.Created>

    {props.isAnswer && <sc.Answeredd />}

    <sc.Body>{props.body}</sc.Body>

    {/* {props.answerCount && (
      <sc.AnswerCount>{props.answerCount} Answers</sc.AnswerCount>
    )}

    {props.commentCount && (
      <sc.CommentCount>{props.commentCount} Comments</sc.CommentCount>
    )} */}

    <sc.ViewThread href=''>View Thread</sc.ViewThread>
  </sc.Container>
);

Thread.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired,
  isAnswer: PropTypes.bool.isRequired
};

export default React.memo(Thread);
