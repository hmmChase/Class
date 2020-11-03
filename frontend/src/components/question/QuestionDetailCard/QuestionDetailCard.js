import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import { CurrentUserContext } from '../../../context/contexts';
import DropdownQuestion from '../DropdownQuestion/DropdownQuestion';
import TextExpand from '../../reuseable/TextExpand/TextExpand';
import * as sc from './QuestionDetailCard.style';

const QuestionDetailCard = props => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === props.authorId);

  return (
    <sc.Container>
      <sc.Row>
        <sc.Group>
          <sc.Author>{props.question.author.username}</sc.Author>

          <sc.Created>{formatDate(props.question.createdAt)}</sc.Created>
        </sc.Group>

        <sc.Relative>
          {isDropdownOpen && (
            <DropdownQuestion
              questionId={props.questionId}
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

      <sc.Title>{props.question.title}</sc.Title>

      <TextExpand>{props.question.body}</TextExpand>
    </sc.Container>
  );
};

QuestionDetailCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(QuestionDetailCard);
