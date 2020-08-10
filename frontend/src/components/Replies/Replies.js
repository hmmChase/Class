import React from 'react';
import PropTypes from 'prop-types';
import ReplyCard from '../ReplyCard/ReplyCard';
import formatDate from '../../utils/formatDate';
import * as sc from './Replies.style';

const Replies = props => {
  const replyCards = props.replies.map(reply => (
    <ReplyCard
      key={reply.id}
      createdAt={formatDate(reply.createdAt)}
      authorName={reply.author.name}
      body={reply.body}
    />
  ));

  return <sc.Container className={props.className}>{replyCards}</sc.Container>;
};

Replies.propTypes = {
  className: PropTypes.string
};

export default React.memo(Replies);
