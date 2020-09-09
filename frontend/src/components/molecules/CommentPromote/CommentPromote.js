import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import * as sc from './CommentPromote.style';

const CommentPromote = props => {
  const [setAsAnswer] = useFetch('/comment/answer-promote');

  const onClick = async e => {
    e.preventDefault();

    await setAsAnswer();
  };

  return <sc.Span onClick={onClick}>Promote as Answer</sc.Span>;
};

CommentPromote.propTypes = {
  commentId: PropTypes.number.isRequired
};

export default React.memo(CommentPromote);
