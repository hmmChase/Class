import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import { CurrentUser } from '../../../context/contexts';
import DropdownQuestion from '../DropdownQuestion/DropdownQuestion';
import * as sc from './QuestionCard.style';

const QuestionCard = props => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useContext(CurrentUser);
  const { challengePath } = useParams();

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === props.authorId);

  return (
    <sc.Container className={props.className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{props.authorName}</sc.Author>

          <sc.Created>{props.createdAt}</sc.Created>
        </sc.Group>

        <sc.GroupTopRight>
          {props.isAnswered && <sc.Answeredd />}

          <sc.Relative>
            {isDropdownOpen && (
              <DropdownQuestion
                role={currentUser.role}
                isDropdownOpen={isDropdownOpen}
                questionId={props.questionId}
                close={() => setDropdownOpen(false)}
                handleDeleteQuestion={props.handleDeleteQuestion}
              />
            )}

            {shouldShowMenu && (
              <sc.DropdownButton
                isDropdownOpen={isDropdownOpen}
                onClick={() => setDropdownOpen(true)}
              >
                ...
              </sc.DropdownButton>
            )}
          </sc.Relative>
        </sc.GroupTopRight>
      </sc.Row>

      <sc.Row>
        <sc.Title>{props.title}</sc.Title>
      </sc.Row>

      <sc.Row>
        <sc.Group>
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
        </sc.Group>

        <Link to={`/${challengePath}/${props.questionId}`}>
          <sc.ViewQuestion>View Question</sc.ViewQuestion>
        </Link>
      </sc.Row>
    </sc.Container>
  );
};

QuestionCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string
  // isAnswer: PropTypes.bool.isRequired
};

export default React.memo(QuestionCard);
