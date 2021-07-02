import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../context';
import { useCommentDelete, useDemoteAnswer } from '../../../hooks/comment';
import * as sc from './AnswerDropdown.style';

const AnswerDropdown = props => {
  const { className, isDropdownOpen, close, role, commentId } = props;

  const { comments, setComments } = useContext(CommentContext);

  const mutationDelete = useCommentDelete({
    onSuccess: data => {
      const filteredComments = comments.filter(
        comment => comment.id !== commentId
      );

      setComments(filteredComments);
    }
  });

  const mutationDemoteAnswer = useDemoteAnswer({
    onSuccess: data => setComments(data.data)
  });

  const handleClickDelete = () => mutationDelete.mutate({ commentId });

  const handleClickPromote = () => mutationDemoteAnswer.mutate({ commentId });

  return (
    <sc.Dropdownn
      className={className}
      isDropdownOpen={isDropdownOpen}
      close={close}
    >
      {role === 'TEACHER' && (
        <li>
          <span onClick={handleClickPromote}>Demote from Answer</span>
        </li>
      )}

      <li>
        <span onClick={handleClickDelete}>Remove Post</span>
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
