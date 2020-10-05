import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DropdownAnswer from '../DropdownAnswer/DropdownAnswer';
import { CurrentUser } from '../../../context/contexts';
import * as sc from './AnswerCard.style';

const AnswerCard = props => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { currentUser } = useContext(CurrentUser);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === props.authorId);

  return (
    <sc.Container className={props.className}>
      <sc.Answeredd />

      <sc.GroupCol>
        <sc.Row>
          <sc.Group>
            <sc.Author>{props.authorName}</sc.Author>

            <sc.Timestamp>{props.timestamp}</sc.Timestamp>

            <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>
          </sc.Group>

          <sc.Relative>
            {isDropdownOpen && (
              <DropdownAnswer
                role={currentUser.role}
                isDropdownOpen={isDropdownOpen}
                commentId={props.commentId}
                close={() => setDropdownOpen(false)}
                handleDeleteComment={props.handleDeleteComment}
                demoteAnswer={props.demoteAnswer}
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

        <sc.TextExpandd>{props.body}</sc.TextExpandd>
      </sc.GroupCol>
    </sc.Container>
  );
};

AnswerCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(AnswerCard);
