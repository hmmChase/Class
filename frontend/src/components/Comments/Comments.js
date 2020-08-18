import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from '../CommentCard/CommentCard';
import formatDate from '../../utils/formatDate';
import * as sc from './Comments.style';

const Comments = props => {
  const commentCards = props.comments.map(comment => (
    <CommentCard
      key={comment.id}
      createdAt={formatDate(comment.createdAt)}
      // authorName={comment.author.name}
      body={comment.body}
    />
  ));

  return (
    <sc.Container className={props.className}>{commentCards}</sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string,
  comments: PropTypes.array
};

export default React.memo(Comments);
