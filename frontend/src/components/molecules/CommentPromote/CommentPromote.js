import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import * as sc from './CommentPromote.style';

const CommentPromote = props => {
  const [getData] = useFetch('/comment/answer-promote');

  const onClick = async e => {
    e.preventDefault();

    await getData({ commentId: props.commentId });
  };

  return <sc.Span onClick={onClick}>Promote as Answer</sc.Span>;
};

CommentPromote.propTypes = {
  commentId: PropTypes.number.isRequired
};

export default React.memo(CommentPromote);
