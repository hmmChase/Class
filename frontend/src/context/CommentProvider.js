import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CommentContext } from './';

const CommentProvider = props => {
  const [comments, setComments] = useState([]);

  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentContext.Provider>
  );
};

CommentProvider.propTypes = {
  children: PropTypes.any
};

export default CommentProvider;
