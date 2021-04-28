import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useGetComments } from '../../../hooks/comment';
import { CommentContext } from '../../../context';
import * as sc from './Comments.style';

const Comments = props => {
  const { className, questionId } = props;

  const { comments, setComments } = useContext(CommentContext);

  useGetComments({
    variables: { questionId },

    onSuccess: data => setComments(data.data)
  });

  const commentCards = comments.map(comment => {
    if (!comment.isAnswer)
      return <sc.CommentCardd key={comment.id} comment={comment} />;

    return null;
  });

  return (
    <sc.Container className={className}>
      <sc.CommentsList>
        {commentCards && commentCards.length > 0 && commentCards}
      </sc.CommentsList>
    </sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string,
  questionId: PropTypes.any
};

export default React.memo(Comments);
