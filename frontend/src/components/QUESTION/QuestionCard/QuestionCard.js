import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import { useParams, Link } from 'react-router-dom';
import { CurrentUserContext } from '../../../context';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import QuestionEdit from '../QuestionEdit/QuestionEdit';
import * as sc from './QuestionCard.style';

const QuestionCard = props => {
  const { question } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const { challengePath } = useParams();

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === question.author.id);

  return (
    <sc.Container className={props.className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{question.author.username}</sc.Author>

          <sc.Created>{formatDate(question.createdAt)}</sc.Created>
        </sc.Group>

        <sc.GroupTopRight>
          {props.isAnswered && <sc.Answeredd />}

          <sc.Relative>
            {isDropdownOpen && (
              <QuestionDropdown
                questionId={question.id}
                role={currentUser.role}
                isDropdownOpen={isDropdownOpen}
                close={() => setDropdownOpen(false)}
                setIsEditing={setIsEditing}
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
        {isEditing ? (
          <QuestionEdit
            id={question.id}
            body={question.body}
            setIsEditing={setIsEditing}
          >
            {question.title}
          </QuestionEdit>
        ) : (
          <sc.Title>{question.title}</sc.Title>
        )}
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

        <Link to={`/${challengePath}/${question.id}`}>
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
