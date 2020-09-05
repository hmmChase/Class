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
  const [comments, setComments] = useState([]);
  const { currentUser } = useContext(AppContext);

  const [getQuestion, loadingQuestion, errorQuestion] = useFetch(
    `/question/${props.questionId}`
  );

  const [getComments, loadingComments, errorComments] = useFetch(
    `/comment/question/${props.questionId}`
  );

  const [getData] = useFetch('/comment/create');

  useEffect(() => {
    (async () => {
      const dataQuestion = await getQuestion();
      const dataComments = await getComments();

      if (!loadingQuestion && !errorQuestion && dataQuestion)
        setQuestion(dataQuestion);

      if (!loadingComments && !errorComments && dataComments)
        setComments(dataComments);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateComment = async body => {
    const newComment = await getData({ questionId: props.questionId, body });

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
  };

  return (
    <sc.Container className={props.className}>
      {question && question.id && (
        <>
          <QuestionCardDetail question={question} />

          {/* <CommentAnswer /> */}

          <Comments comments={comments} questionId={props.questionId} />

          {currentUser && currentUser.id && (
            <CommentAdd
              questionId={props.questionId}
              handleCreateComment={handleCreateComment}
            />
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
