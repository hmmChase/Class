import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import * as sc from './CommentDropdown.style';

const CommentDropdown = props => {
  const { promoteAnswer, deleteComment } = useContext(CommentContext);

  const handleClickEdit = () => {
    props.setIsEditing(true);

    props.close();
  };

  return (
    <sc.Dropdownn
      className={props.className}
      isDropdownOpen={props.isDropdownOpen}
      close={props.close}
    >
      {props.role === 'TEACHER' && (
        <li>
          <span onClick={() => promoteAnswer(props.commentId)}>
            Promote as Answer
          </span>
        </li>
      )}

      <li>
        <span onClick={handleClickEdit}>Edit Post</span>
      </li>

      <li>
        <span onClick={() => deleteComment(props.commentId)}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

// CommentDropdown.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentDropdown);
