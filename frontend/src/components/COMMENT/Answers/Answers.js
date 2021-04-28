import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import * as sc from './Answers.style';

const Answers = props => {
  const { className } = props;

  const { comments } = useContext(CommentContext);

  const answerCards = comments.map(comment => {
    if (comment.isAnswer)
      return <sc.AnswerCardd key={comment.id} comment={comment} />;

    return null;
  });

  return (
    <sc.Container className={className}>
      <sc.AnswersList>
        {answerCards && answerCards.length > 0 && answerCards}
      </sc.AnswersList>
    </sc.Container>
  );
};

Answers.propTypes = {
  className: PropTypes.string
};

export default React.memo(Answers);
