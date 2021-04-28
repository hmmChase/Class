import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import { CurrentUserContext } from '../../../context';
import QuestionDropdown from '../QuestionDropdown/QuestionDropdown';
import TextExpand from '../../REUSEABLE/TextExpand/TextExpand';
import * as sc from './QuestionDetailCard.style';

const QuestionDetailCard = props => {
  const { authorId, question, questionId } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === authorId);

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
              questionId={questionId}
              role={currentUser.role}
              isDropdownOpen={isDropdownOpen}
              close={() => setDropdownOpen(false)}
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

      <sc.Title>{question.title}</sc.Title>

      <TextExpand>{question.body}</TextExpand>
    </sc.Container>
  );
};

QuestionDetailCard.propTypes = {
  authorId: PropTypes.any,
  question: PropTypes.shape({
    author: PropTypes.shape({
      username: PropTypes.any
    }),
    body: PropTypes.any,
    createdAt: PropTypes.any,
    title: PropTypes.any
  }),
  questionId: PropTypes.any
};

export default React.memo(QuestionDetailCard);
