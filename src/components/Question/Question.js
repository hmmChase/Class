import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './Question.style';

const Question = props => (
  <sc.Container>
    <sc.Author>{props.author}</sc.Author>

    <sc.Created>{props.createdAt}</sc.Created>

    {props.answerCount && <sc.Answeredd />}

    <sc.Body>{props.body}</sc.Body>

    {props.answerCount && (
      <sc.AnswerCount>{props.answerCount} Answers</sc.AnswerCount>
    )}

    {props.commentCount && (
      <sc.CommentCount>{props.commentCount} Comments</sc.CommentCount>
    )}

    <sc.ViewThread href=''>View Thread</sc.ViewThread>
  </sc.Container>
);

// Question.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Question);
