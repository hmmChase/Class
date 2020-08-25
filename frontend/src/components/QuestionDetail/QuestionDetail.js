import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionCardDetail from '../QuestionCardDetail/QuestionCardDetail';
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

      if (!loading && !error && data) setQuestion(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <sc.Container className={props.className}>
      {!loading && !error && question.id && (
        <QuestionCardDetail
          key={question.id}
          createdAt={formatDate(question.createdAt)}
          authorName={question.author.username}
          body={question.body}
        />
      )}
    </sc.Container>
  );
};

QuestionDetail.propTypes = {
  className: PropTypes.string
};

export default React.memo(QuestionDetail);
