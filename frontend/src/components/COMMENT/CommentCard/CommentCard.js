import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { UserContext } from '../../../context';
import CommentDropdown from '../CommentDropdown/CommentDropdown';
import TextExpand from '../../REUSEABLE/TextExpand/TextExpand';
import CommentEdit from '../CommentEdit/CommentEdit';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  const { className, comment } = props;

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const { currentUser } = useContext(UserContext);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === comment.author.id);

  return (
    <sc.Container className={className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{comment.authorName}</sc.Author>

          <sc.Timestamp>{timestamp(comment.createdAt)}</sc.Timestamp>

          <sc.CreatedAt>{formatDate(comment.createdAt)}</sc.CreatedAt>
        </sc.Group>

        <sc.Relative>
          {isDropdownOpen && (
            <CommentDropdown
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

export default React.memo(CommentCard);
