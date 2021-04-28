import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import * as sc from './AnswerDropdown.style';

const AnswerDropdown = props => {
  const { className, isDropdownOpen, close, role, commentId } = props;

  const { demoteAnswer, deleteComment } = useContext(CommentContext);

  return (
    <sc.Dropdownn
      className={className}
      isDropdownOpen={isDropdownOpen}
      close={close}
    >
      {role === 'TEACHER' && (
        <li>
          <span onClick={() => demoteAnswer(commentId)}>
            Demote from Answer
          </span>
        </li>
      )}

      <li>
        <span onClick={() => deleteComment(commentId)}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

AnswerDropdown.propTypes = {
  className: PropTypes.string,
  close: PropTypes.any,
  commentId: PropTypes.any,
  isDropdownOpen: PropTypes.any,
  role: PropTypes.string
};

export default React.memo(AnswerDropdown);
