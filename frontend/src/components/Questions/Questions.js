import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
        body={question.body}
        commentCount={question.comments.length}
        answerCount={answerCount}
        isAnswered={!!answerCount}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      <sc.Relative>
        <sc.Absolute>
          <sc.QuestionsList>{questionCards}</sc.QuestionsList>
        </sc.Absolute>
      </sc.Relative>
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
