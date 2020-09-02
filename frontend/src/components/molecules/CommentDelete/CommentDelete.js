import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import * as sc from './CommentDelete.style';

const CommentDelete = props => {
  const [getData] = useFetch('/comment/delete');

  const onClick = async e => {
    e.preventDefault();

    await getData({ commentId: props.commentId });
  };

  return <sc.Span onClick={onClick}>Remove Post</sc.Span>;
};

CommentDelete.propTypes = {
  commentId: PropTypes.string.isRequired
};

export default React.memo(CommentDelete);
