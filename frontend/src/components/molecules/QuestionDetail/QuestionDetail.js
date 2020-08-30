import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';

import useFetch from '../../../api/useFetch';
// import formatDate from '../../utils/formatDate';
import Comments from '../Comments/Comments';
import QuestionCardDetail from '../QuestionCardDetail/QuestionCardDetail';
import CommentAdd from '../CommentAdd/CommentAdd';
// import CommentAnswer from '../CommentAnswer/CommentAnswer';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  const [question, setQuestion] = useState({});
  const { currentUser } = useContext(AppContext);

  const [getData, { loading, error }] = useFetch(
    `/question/${props.questionId}`
  );

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (data) setQuestion(data);

      console.log('data:', data);

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

          {currentUser && currentUser.id && (
            <CommentAdd questionId={props.questionId} />
          )}
        </>
      )}
    </sc.Container>
  );
};

QuestionDetail.propTypes = {
  className: PropTypes.string,
  // questionId: PropTypes.number
  questionId: PropTypes.string
};

export default React.memo(QuestionDetail);
