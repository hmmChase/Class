import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
// import formatDate from '../../utils/formatDate';
import Comments from '../Comments/Comments';
import QuestionCardDetail from '../QuestionCardDetail/QuestionCardDetail';
import CommentAdd from '../CommentAdd/CommentAdd';
// import CommentAnswer from '../CommentAnswer/CommentAnswer';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  const [question, setQuestion] = useState({});
  const [getData, { loading, error }] = useFetch(
    `/questions/${props.questionId}`
  );

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (data) setQuestion(data);

      if (!loading && !error && data) setQuestion(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <sc.Container className={props.className}>
      {question && question.id && (
        <>
          <QuestionCardDetail question={question} />

          {/* <CommentAnswer /> */}

          <Comments questionId={props.questionId} />

          <CommentAdd questionId={props.questionId} />
        </>
      )}
    </sc.Container>
  );
};

QuestionDetail.propTypes = {};

export default React.memo(QuestionDetail);
