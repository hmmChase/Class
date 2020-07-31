import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './QuestionCard.style';

const QuestionCard = props => (
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

    <sc.ViewQuestion href=''>View Question</sc.ViewQuestion>
  </sc.Container>
);

QuestionCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired,
  isAnswer: PropTypes.bool.isRequired
};

export default React.memo(QuestionCard);
