import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import { UserContext } from '../../../context';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import QuestionDetailEdit from '../QuestionDetailEdit/QuestionDetailEdit';
import TextExpand from '../../REUSEABLE/TextExpand/TextExpand';
import * as sc from './QuestionDetailCard.style';

const QuestionDetailCard = props => {
  const { question } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useContext(UserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === question.author_id);

  return (
    <sc.Container>
      <sc.Row>
        <sc.Group>
          <sc.Author>{question.author.username}</sc.Author>

          <sc.Created>{formatDate(question.createdAt)}</sc.Created>
        </sc.Group>

        <sc.Relative>
          {isDropdownOpen && (
            <QuestionDropdown
              questionId={question.questionId}
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
      </sc.Row>

      <sc.Row>
        {isEditing && (
          <QuestionDetailEdit
            id={question.id}
            title={question.title}
            body={question.body}
            setIsEditing={setIsEditing}
          />
        )}
      </sc.Row>
      {!isEditing && (
        <>
          <sc.Title>{question.title}</sc.Title>

          <TextExpand>{question.body}</TextExpand>
        </>
      )}
    </sc.Container>
  );
};

QuestionDetailCard.propTypes = {
  question: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.any
    }),
    author_id: PropTypes.any,
    body: PropTypes.any,
    createdAt: PropTypes.any,
    questionId: PropTypes.any,
    title: PropTypes.any
  })
};

export default React.memo(QuestionDetailCard);
