import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DropdownAnswer from '../DropdownAnswer/DropdownAnswer';
import { CurrentUserContext } from '../../../context/contexts';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './AnswerCard.style';

const AnswerCard = props => {
  const { comment } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === comment.authorId);

  return (
    <sc.Container className={props.className}>
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
              <DropdownAnswer
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
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(AnswerCard);
