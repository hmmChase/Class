import React, { useState } from 'react';
import { CommentContext } from './';

const CommentProvider = props => {
  const [comments, setComments] = useState([]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
