import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
import CommentCard from '../CommentCard/CommentCard';
import formatDate, { timeStamp } from '../../utils/formatDate';
import * as sc from './Comments.style';

const Comments = props => {
  const [comments, setComments] = useState([]);
  const [getData, { loading, error }] = useFetch(
    `/comments/${props.questionId}`
  );

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (!loading && !error && data) setComments(data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // {console.log(question.comments.length > 0)}

  const commentCards = comments.map(comment => (
    <CommentCard
      key={comment.id}
      authorName={comment.author.username}
      createdAt={formatDate(comment.createdAt)}
      body={comment.body}
    />
  ));

  return (
    <sc.Container className={props.className}>{commentCards}</sc.Container>
  );
};

Comments.propTypes = {
  className: PropTypes.string
};

export default React.memo(Comments);
