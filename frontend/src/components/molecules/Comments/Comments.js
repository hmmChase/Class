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
          authorName={comment.author.username}
          timestamp={timestamp(comment.createdAt)}
          createdAt={formatDate(comment.createdAt)}
          body={comment.body}
          handleDeleteComment={props.handleDeleteComment}
          promoteAnswer={props.promoteAnswer}
        />
      );

    return null;
  });

  return (
    <sc.Container className={props.className}>
      <sc.Relative>
        <sc.Absolute>
          <sc.CommentsList>{props.comments && commentCards}</sc.CommentsList>
        </sc.Absolute>
      </sc.Relative>
    </sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string
};

export default React.memo(Comments);
