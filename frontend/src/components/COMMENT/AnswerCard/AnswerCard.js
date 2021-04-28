import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import AnswerDropdown from '../AnswerDropdown/AnswerDropdown';
import { CurrentUserContext } from '../../../context';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './AnswerCard.style';

const AnswerCard = props => {
  const { className, comment } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === comment.author.id);

  return (
    <sc.Container className={className}>
      <sc.Answeredd />

      <sc.GroupCol>
        <sc.Row>
          <sc.Group>
            <sc.Author>{comment.authorName}</sc.Author>

            <sc.Timestamp>{timestamp(comment.createdAt)}</sc.Timestamp>

            <sc.CreatedAt>{formatDate(comment.createdAt)}</sc.CreatedAt>
          </sc.Group>

          <sc.Relative>
            {isDropdownOpen && (
              <AnswerDropdown
                commentId={comment.id}
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

        <sc.TextExpandd>{comment.body}</sc.TextExpandd>
      </sc.GroupCol>
    </sc.Container>
  );
};

AnswerCard.propTypes = {
  className: PropTypes.any,
  comment: PropTypes.shape({
    author: PropTypes.shape({
      id: PropTypes.any
    }),
    authorName: PropTypes.any,
    body: PropTypes.any,
    createdAt: PropTypes.any,
    id: PropTypes.any
  })
};

export default React.memo(AnswerCard);
