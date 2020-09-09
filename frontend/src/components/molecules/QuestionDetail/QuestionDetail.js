import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';
import useFetch from '../../../api/useFetch';
import Comments from '../Comments/Comments';
import QuestionDetailCard from '../QuestionDetailCard/QuestionDetailCard';
import CommentCreate from '../CommentCreate/CommentCreate';
import Answers from '../Answers/Answers';
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

  const [commentCreate] = useFetch('/comment/create');

  const [commentDelete] = useFetch('/comment/delete-soft');

  const [promoteAnswer] = useFetch('/comment/answer-promote');

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
    const newComment = await commentCreate({
      questionId: props.questionId,
      body
    });

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
  };

  const setAsAnswer = async commentId => {
    const updatedComments = await promoteAnswer({ commentId });

    setComments(updatedComments);
  };

  const handleDeleteComment = async commentId => {
    await commentDelete({ commentId });

    const filteredComments = comments.filter(
      comment => comment.id !== commentId
    );

    setComments(filteredComments);
  };

  return (
    <sc.Container className={props.className}>
      {question && question.id && (
        <>
          <QuestionDetailCard question={question} />

          <Answers
            comments={comments}
            questionId={props.questionId}
            handleDeleteComment={handleDeleteComment}
          />

          <Comments
            comments={comments}
            questionId={props.questionId}
            handleDeleteComment={handleDeleteComment}
            setAsAnswer={setAsAnswer}
          />

          {currentUser && currentUser.id && (
            <CommentCreate
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
