import React from 'react';
import PropTypes from 'prop-types';
import useQuestions from '../../api/useQuestions';
import useReplies from '../../api/useReplies';
import * as sc from './Discussion.style';

const Discussion = props => {
  const questions = useQuestions();
  console.log('questions:', questions);

  return (
    <sc.Container className={props.className}>
      <sc.Flexed>
        <div>
          <sc.Label>DISCUSSION</sc.Label>

          <sc.Title>Ask a Question</sc.Title>
        </div>

        <sc.QuestionBtnn />
      </sc.Flexed>

      <sc.Questionss questions={questions} />
      <sc.QuestionDetail questions={questions} />
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
