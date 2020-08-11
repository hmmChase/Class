import React from 'react';
import PropTypes from 'prop-types';
import AnswerCard from '../AnswerCard/AnswerCard';
import formatDate from '../../utils/formatDate';
import * as sc from './Answers.style';

const Answers = props => {
  console.log('props:', props);

  const answerCards = props.answers.map(answer => (
    <AnswerCard
      key={answer.id}
      createdAt={formatDate(answer.createdAt)}
      // authorName={answer.author.name}
      body={answer.body}
    />
  ));

  return <sc.Container className={props.className}>{answerCards}</sc.Container>;
};

Answers.propTypes = {
  answers: PropTypes.array,
  className: PropTypes.string
};

export default React.memo(Answers);
