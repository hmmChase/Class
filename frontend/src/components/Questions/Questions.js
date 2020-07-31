import React from 'react';
import PropTypes from 'prop-types';
import useQuestions from '../../api/useQuestions';
import Thread from '../QuestionCard/QuestionCard';
import formatDate from '../../utils/formatDate';
import * as sc from './Questions.style';

const Questions = props => {
  const questions = useQuestions();

  const threadCards = questions.map((thread, i) => {
    return (
      <Thread
        key={thread.id}
        createdAt={formatDate(thread.createdAt)}
        authorName={thread.author.name}
        isAnswer={thread.isAnswer}
        body={thread.body}
        // answerCount={thread.answerCount}
        // commentCount={thread.commentCount}
      />
    );
  });

  return <sc.Container className={props.className}>{threadCards}</sc.Container>;
};

Questions.propTypes = {
  className: PropTypes.string
};

export default React.memo(Questions);
