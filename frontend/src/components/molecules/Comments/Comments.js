import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, timestamp } from '../../../utils/dateTime';
import * as sc from './Comments.style';

const Comments = props => {
  const commentCards = props.comments.map(comment => {
    if (!comment.isAnswer)
      return (
        <sc.CommentCardd
          key={comment.id}
          commentId={comment.id}
          authorId={comment.author.id}
          authorName={comment.author.username}
          timestamp={timestamp(comment.createdAt)}
          createdAt={formatDate(comment.createdAt)}
          body={comment.body}
          handleUpdateComment={props.handleUpdateComment}
          handleDeleteComment={props.handleDeleteComment}
          promoteAnswer={props.promoteAnswer}
        />
      );

    return null;
  });

  return (
    <sc.Container className={props.className}>
      <sc.CommentsList>{props.comments && commentCards}</sc.CommentsList>
    </sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string
};

export default React.memo(Comments);
