import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context/contexts';
import * as sc from './Questions.style';

const Questions = props => {
  const { questions, getQuestions } = useContext(QuestionContext);

  const { challengePath } = useParams();

  getQuestions(challengePath);

  const questionCards = questions.map(question => {
    const answerCount = question.comments.reduce((total, comment) => {
      if (comment.isAnswer) total++;

      return total;
    }, 0);

    const commentCount = question.comments.reduce((total, comment) => {
      if (!comment.isAnswer) total++;

      return total;
    }, 0);

    return (
      <sc.QuestionCardd
        key={question.id}
        question={question}
        commentCount={commentCount}
        answerCount={answerCount}
        isAnswered={!!answerCount}
      />
    );
  });

  return (
    <sc.Container className={props.className}>
      <sc.QuestionsList>
        {questions.length > 0 && questionCards}
      </sc.QuestionsList>
    </sc.Container>
  );
};

Questions.propTypes = {
  className: PropTypes.string
};

export default Questions;
