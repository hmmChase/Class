import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/app';
import { Link } from 'react-router-dom';
import * as sc from './QuestionCard.style';

const QuestionCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container>
      <sc.Row>
        <sc.Author>{props.authorName}</sc.Author>

        <sc.Created>{props.createdAt}</sc.Created>

        <sc.RightSide>
          {props.isAnswered && <sc.Answeredd />}

          {currentUser.role === 'TEACHER' && <sc.DotDotDot>...</sc.DotDotDot>}
        </sc.RightSide>
      </sc.Row>

      <sc.Row>
        <sc.Body>{props.body}</sc.Body>
      </sc.Row>

      <sc.Row>
        {!!props.answerCount && (
          <sc.AnswerCount>{`${props.answerCount} Answer${
            props.answerCount > 1 ? 's' : ''
          }`}</sc.AnswerCount>
        )}

        {!!props.commentCount && (
          <sc.CommentCount>{`${props.commentCount} Comment${
            props.commentCount > 1 ? 's' : ''
          }`}</sc.CommentCount>
        )}

        <Link to={`/challenge/${props.questionId}`}>
          <sc.ViewQuestion>View Question</sc.ViewQuestion>
        </Link>
      </sc.Row>
    </sc.Container>
  );
};

QuestionCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
  // isAnswer: PropTypes.bool.isRequired
};

export default React.memo(QuestionCard);
