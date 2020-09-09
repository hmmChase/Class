import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './Answers.style';

const Answers = props => {
  const answerCards = props.comments.map(comment => {
    if (comment.isAnswer)
      return (
        <sc.AnswerCardd
          key={comment.id}
          commentId={comment.id}
          authorName={comment.author.username}
          timestamp={timestamp(comment.createdAt)}
          createdAt={formatDate(comment.createdAt)}
          body={comment.body}
          isAnswer={comment.isAnswer}
          handleDeleteComment={props.handleDeleteComment}
          demoteAnswer={props.demoteAnswer}
        />
      );

    return null;
  });

  return (
    <sc.Container className={props.className}>
      {/* <sc.Relative> */}
      {/* <sc.Absolute> */}
      <sc.AnswersList>{props.comments && answerCards}</sc.AnswersList>
      {/* </sc.Absolute> */}
      {/* </sc.Relative> */}
    </sc.Container>
  );
};

Answers.propTypes = {
  className: PropTypes.string
};

export default React.memo(Answers);
