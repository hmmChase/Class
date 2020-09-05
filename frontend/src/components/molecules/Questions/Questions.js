import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import * as sc from './Questions.style';

const Questions = props => {
  const questionCards = props.questions.map(question => {
    const answerCount = question.comments.reduce((total, comment) => {
      if (comment.isAnswer) total++;

      return total;
    }, 0);

    return (
      <sc.QuestionCardd
        key={question.id}
        questionId={question.id}
        createdAt={formatDate(question.createdAt)}
        authorName={question.author.username}
        title={question.title}
        commentCount={question.comments.length}
        answerCount={answerCount}
        isAnswered={!!answerCount}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      {/* <sc.Relative> */}
      {/* <sc.Absolute> */}
      <sc.QuestionsList>
        {props.questions.length > 0 && questionCards}
      </sc.QuestionsList>
      {/* </sc.Absolute> */}
      {/* </sc.Relative> */}
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
