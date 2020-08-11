import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCardDetail from '../QuestionCardDetail/QuestionCardDetail';
import Answers from '../Answers/Answers';
import useFetch from '../../api/useFetch';
import formatDate from '../../utils/formatDate';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  const [question, setQuestion] = useState({});

  const [getData, { loading, error }] = useFetch(
    `/questions/${props.questionId}`
  );

  useEffect(() => {
    (async () => {
      const data = await getData();

      console.log('data:', data);

      if (!loading && !error && data) setQuestion(data);
    })();
  }, []);

  return (
    <sc.Container className={props.className}>
      {console.log('question:', question)}
      {console.log('loading:', !!!loading)}
      {console.log('error:', !!!error)}

      {!loading && !error && question.id && (
        <>
          <QuestionCardDetail
            key={question.id}
            createdAt={formatDate(question.createdAt)}
            // authorName={question.author.name}
            body={question.body}
            // answerCount={question.answerCount}
            // answerCount={question.answers.length}
          />

          {question.answers.length > 0 && (
            <Answers answers={question.answers} />
          )}
        </>
      )}
    </sc.Container>
  );
};

QuestionDetail.propTypes = {
  className: PropTypes.string
};

export default React.memo(QuestionDetail);
