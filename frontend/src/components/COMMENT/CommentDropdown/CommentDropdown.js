import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import * as sc from './CommentDropdown.style';

const CommentDropdown = props => {
  const {
    className,
    setIsEditing,
    close,
    isDropdownOpen,
    role,
    commentId
  } = props;

  const { promoteAnswer, deleteComment } = useContext(CommentContext);

  const handleClickEdit = () => {
    setIsEditing(true);

    close();
  };

  return (
    <sc.Dropdownn
      className={className}
      isDropdownOpen={isDropdownOpen}
      close={close}
    >
      {role === 'TEACHER' && (
        <li>
          <span onClick={() => promoteAnswer(commentId)}>
            Promote as Answer
          </span>
        </li>
      )}

      <li>
        <span onClick={handleClickEdit}>Edit Post</span>
      </li>

      <li>
        <span onClick={() => deleteComment(commentId)}>Remove Post</span>
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
