import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { CurrentUser } from '../../../context/contexts';
import DropdownComment from '../DropdownComment/DropdownComment';
import TextExpand from '../../atoms/TextExpand/TextExpand';
import CommentEdit from '../CommentEdit/CommentEdit';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { currentUser } = useContext(CurrentUser);

  const shouldShowMenu =
    currentUser &&
    currentUser.id &&
    (currentUser.role === 'TEACHER' || currentUser.id === props.authorId);

  return (
    <sc.Container className={props.className}>
      <sc.Row>
        <sc.Group>
          <sc.Author>{props.authorName}</sc.Author>

          <sc.Timestamp>{props.timestamp}</sc.Timestamp>

          <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>
        </sc.Group>

        <sc.Relative>
          {isDropdownOpen && (
            <DropdownComment
              role={currentUser.role}
              isDropdownOpen={isDropdownOpen}
              commentId={props.commentId}
              close={() => setDropdownOpen(false)}
              handleDeleteComment={props.handleDeleteComment}
              promoteAnswer={props.promoteAnswer}
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
        <CommentEdit
          id={props.commentId}
          setIsEditing={setIsEditing}
          handleUpdateComment={props.handleUpdateComment}
        >
          {props.body}
        </CommentEdit>
      ) : (
        <TextExpand>{props.body}</TextExpand>
      )}
    </sc.Container>
  );
};

CommentCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(CommentCard);
