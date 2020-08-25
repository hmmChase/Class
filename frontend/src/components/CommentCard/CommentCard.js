import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './CommentCard.style';

const CommentCard = props => {
  return (
    <sc.Container className={props.className}>
      <sc.Author>{props.authorName}</sc.Author>

      <sc.Created>{props.createdAt}</sc.Created>

      <sc.Body>{props.body}</sc.Body>
    </sc.Container>
  );
};

CommentCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(CommentCard);
