import React from 'react';
import PropTypes from 'prop-types';
import useThreads from '../../api/useThreads';
import Thread from '../Thread/Thread';
import formatDate from '../../utils/formatDate';
import * as sc from './Threads.style';

const Threads = props => {
  const threads = useThreads();


  const threadCards = threads.map((thread, i) => {
    return (
      <Thread
        key={thread.id}
        createdAt={formatDate(thread.createdAt)}
        authorName={thread.author.name}
        isAnswer={thread.isAnswer}
        body={thread.body}
        // answerCount={thread.answerCount}
        // commentCount={thread.commentCount}
      />
    );
  });

  return <sc.Container className={props.className}>{threadCards}</sc.Container>;
};

Threads.propTypes = {
  className: PropTypes.string
};

export default React.memo(Threads);
