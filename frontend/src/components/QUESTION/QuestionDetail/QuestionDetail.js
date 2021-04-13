import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  CurrentUserContext,
  CommentContext,
  QuestionContext
} from '../../../context';
import { useGetComments } from '../../../hooks';
import Comments from '../../COMMENT/Comments/Comments';
import QuestionDetailCard from '../QuestionDetailCard/QuestionDetailCard';
import CommentCreate from '../../COMMENT/CommentCreate/CommentCreate';
import Answers from '../../COMMENT/Answers/Answers';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  const { currentUser } = useContext(CurrentUserContext);

  const { question, getQuestion } = useContext(QuestionContext);

  const { setComments } = useContext(CommentContext);

  useGetComments({
    variables: { questionId: props.questionId },
    onSuccess: async data => {
      const gotData = await data;

      setComments(gotData.data);
    }
  });

  useEffect(() => {
    // (async () => {
    getQuestion(props.questionId);

    // getComments(props.questionId);
    // })();

    // eslint-disable-next-line
  }, []);

  return (
    <sc.Container className={props.className}>
      {question && question.id && (
        <>
          <QuestionDetailCard question={question} />

          <Answers questionId={props.questionId} />

          <Comments questionId={props.questionId} />

          {currentUser && currentUser.id && (
            <CommentCreate questionId={props.questionId} />
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
