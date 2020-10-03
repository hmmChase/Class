import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './DropdownAnswer.style';

const DropdownAnswer = props => (
  <sc.Dropdownn
    className={props.className}
    isDropdownOpen={props.isDropdownOpen}
    close={props.close}
  >
    <li>
      <span onClick={() => props.demoteAnswer(props.commentId)}>
        Demote from Answer
      </span>
    </li>

    <li>
      <span onClick={() => props.handleDeleteComment(props.commentId)}>
        Remove Post
      </span>
    </li>
  </sc.Dropdownn>
);

// DropdownAnswer.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownAnswer);
