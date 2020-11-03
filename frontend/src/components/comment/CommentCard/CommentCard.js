import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../../context/contexts';
import DropdownComment from '../DropdownComment/DropdownComment';
import TextExpand from '../../reuseable/TextExpand/TextExpand';
import CommentEdit from '../CommentEdit/CommentEdit';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  const { comment } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === comment.author.id);

  return (
    <sc.Container className={props.className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{comment.authorName}</sc.Author>

          <sc.Timestamp>{timestamp(comment.createdAt)}</sc.Timestamp>

          <sc.CreatedAt>{formatDate(comment.createdAt)}</sc.CreatedAt>
        </sc.Group>

        <sc.Relative>
          {isDropdownOpen && (
            <DropdownComment
              commentId={comment.id}
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

      {isEditing ? (
        <CommentEdit id={comment.id} setIsEditing={setIsEditing}>
          {comment.body}
        </CommentEdit>
      ) : (
        <TextExpand>{comment.body}</TextExpand>
      )}
    </sc.Container>
  );
};

CommentCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(CommentCard);
