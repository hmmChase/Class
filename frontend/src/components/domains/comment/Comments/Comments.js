import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from '../../../../context/contexts';
import * as sc from './Comments.style';

const Comments = props => {
  const { comments } = useContext(CommentContext);

  const commentCards = comments.map(comment => {
    if (!comment.isAnswer)
      return <sc.CommentCardd key={comment.id} comment={comment} />;

    return null;
  });

  return (
    <sc.Container className={props.className}>
      <sc.CommentsList>
        {commentCards && commentCards.length > 0 && commentCards}
      </sc.CommentsList>
    </sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string
};

export default React.memo(Comments);
