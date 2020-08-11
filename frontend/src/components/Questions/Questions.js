import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard';
import useFetch from '../../api/useFetch';
import formatDate from '../../utils/formatDate';
import * as sc from './Questions.style';

const Questions = props => {
  const [questions, setQuestions] = useState([]);
  console.log('questions:', questions);

  const [getData, { loading, error }] = useFetch('/questions');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setQuestions(data);
    })();
  }, []);

  const questionCards = questions.map(question => (
    <QuestionCard
      key={question.id}
      questionId={question.id}
      createdAt={formatDate(question.createdAt)}
      authorName={question.author.name}
      body={question.body}
      // answerCount={question.answerCount}
      answerCount={question.answers.length}
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
