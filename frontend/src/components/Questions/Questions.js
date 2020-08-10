import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard';
import formatDate from '../../utils/formatDate';
import * as sc from './Questions.style';

const Questions = props => {
  const questionCards = props.questions.map(question => (
    <QuestionCard
      key={question.id}
      questionId={question.id}
      createdAt={formatDate(question.createdAt)}
      authorName={question.author.name}
      body={question.body}
      // answerCount={question.answerCount}
      // commentCount={question.commentCount}
    />
  ));

  return (
    <sc.Container className={props.className}>{questionCards}</sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default React.memo(Questions);
