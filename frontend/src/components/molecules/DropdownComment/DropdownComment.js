import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './DropdownComment.style';

const DropdownComment = props => (
  <sc.Dropdownn
    className={props.className}
    isDropdownOpen={props.isDropdownOpen}
    close={props.close}
  >
    {props.role === 'TEACHER' && (
      <li>
        <span onClick={() => props.promoteAnswer(props.commentId)}>
          Promote as Answer
        </span>
      </li>
    )}

    <li>
      <span>Edit Post</span>
    </li>

    <li>
      <span onClick={() => props.handleDeleteComment(props.commentId)}>
        Remove Post
      </span>
    </li>
  </sc.Dropdownn>
);

// DropdownComment.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownComment);
