import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import { useCommentDelete, usePromoteAnswer } from '../../../hooks/comment';
import * as sc from './CommentDropdown.style';

const CommentDropdown = props => {
  const { className, setIsEditing, close, isDropdownOpen, role, commentId } =
    props;

  const { comments, setComments } = useContext(CommentContext);

  const mutationDelete = useCommentDelete({
    onSuccess: data => {
      const filteredComments = comments.filter(
        comment => comment.id !== commentId
      );

      setComments(filteredComments);
    }
  });

  const mutationPromoteAnswer = usePromoteAnswer({
    onSuccess: data => setComments(data.data)
  });

  const handleClickEdit = () => {
    setIsEditing(true);

    close();
  };

  const handleClickDelete = () => mutationDelete.mutate({ commentId });

  const handleClickPromote = () => mutationPromoteAnswer.mutate({ commentId });

  return (
    <sc.Dropdownn
      className={className}
      isDropdownOpen={isDropdownOpen}
      close={close}
    >
      {role === 'TEACHER' && (
        <li>
          <span onClick={handleClickPromote}>Promote as Answer</span>
        </li>
      )}

      <li>
        <span onClick={handleClickEdit}>Edit Post</span>
      </li>

      <li>
        <span onClick={handleClickDelete}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

CommentDropdown.propTypes = {
  className: PropTypes.string,
  close: PropTypes.func,
  commentId: PropTypes.any,
  isDropdownOpen: PropTypes.any,
  role: PropTypes.string,
  setIsEditing: PropTypes.func
};

export default React.memo(CommentDropdown);
