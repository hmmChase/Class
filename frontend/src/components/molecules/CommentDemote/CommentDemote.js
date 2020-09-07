import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../../api/useFetch';
import * as sc from './CommentDemote.style';

const CommentDemote = props => {
  const [getData] = useFetch('/comment/answer-demote');

  const onClick = async e => {
    e.preventDefault();

    await getData({ commentId: props.commentId });
  };

  return <sc.Span onClick={onClick}>Demote from Answer</sc.Span>;
};

CommentDemote.propTypes = {
  commentId: PropTypes.number.isRequired
};

export default React.memo(CommentDemote);
