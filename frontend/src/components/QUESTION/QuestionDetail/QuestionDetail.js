import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext, QuestionContext } from '../../../context';
import { useGetQuestion } from '../../../hooks/question';
import Comments from '../../COMMENT/Comments/Comments';
import QuestionDetailCard from '../QuestionDetailCard/QuestionDetailCard';
import CommentCreate from '../../COMMENT/CommentCreate/CommentCreate';
import Answers from '../../COMMENT/Answers/Answers';
import * as sc from './QuestionDetail.style';

const QuestionDetail = props => {
  const { className, questionId } = props;

  const { currentUser } = useContext(UserContext);

  const { question, setQuestion } = useContext(QuestionContext);

  useGetQuestion({
    variables: { questionId },

    onSuccess: async data => {
      const resolvedData = await data;

      setQuestion(resolvedData.data);
    }
  });

  // useEffect(() => {
  //   // (async () => {
  //   getQuestion(questionId);

  //   // getComments(questionId);
  //   // })();

  //   // eslint-disable-next-line
  // }, []);

  return (
    <sc.Container className={className}>
      {question && question.id && (
        <>
          <QuestionDetailCard question={question} />

          <Answers questionId={questionId} />

          <Comments questionId={questionId} />

          {currentUser && currentUser.id && (
            <CommentCreate questionId={questionId} />
          )}
        </>
      )}
    </sc.Container>
  );
};

QuestionDetail.propTypes = {
  className: PropTypes.any,
  questionId: PropTypes.any
};

export default React.memo(QuestionDetail);
