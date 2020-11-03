import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CommentContext } from '../../../../context/contexts';
import * as sc from './DropdownComment.style';

const DropdownComment = props => {
  const { handleDeleteComment, promoteAnswer } = useContext(CommentContext);

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
        <span onClick={() => handleDeleteComment(props.commentId)}>
          Remove Post
        </span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownComment.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownComment);
