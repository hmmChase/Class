import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './CommentDelete.style';

const CommentDelete = props => {
  const onClick = async e => {
    e.preventDefault();

    props.handleDeleteComment(props.commentId);
  };

  return <sc.Span onClick={onClick}>Remove Post</sc.Span>;
};

CommentDelete.propTypes = {
  commentId: PropTypes.string.isRequired
};

export default React.memo(CommentDelete);
