import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard';
import useFetch from '../../api/useFetch';
import formatDate from '../../utils/formatDate';
import * as sc from './Questions.style';

const Questions = props => {
  const [questions, setQuestions] = useState([]);
  const [getData, { loading, error }] = useFetch('/questions');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setQuestions(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const questionCards = questions.map(question => {
    let answerCount = 0;

    question.comments.reduce(comment => {
      return comment;
    }, 0);

    return (
      <QuestionCard
        key={question.id}
        questionId={question.id}
        createdAt={formatDate(question.createdAt)}
        authorName={question.author.username}
        body={question.body}
        commentCount={question.comments.length}
        // answerCount={question.answerCount}
      />
    );
  });

  return (
    <sc.Container className={props.className}>{questionCards}</sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default React.memo(Questions);
