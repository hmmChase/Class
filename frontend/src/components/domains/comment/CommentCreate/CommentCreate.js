import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { CommentContext } from '../../../../context/contexts';
import * as sc from './CommentCreate.style';

const CommentCreate = props => {
  const [body, setBody] = useState('');

  const { createComment } = useContext(CommentContext);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const onClick = e => {
    e.preventDefault();

    createComment(props.questionId, body);

    setBody('');
  };

  return (
    <sc.Container>
      <sc.AddInput
        type='text'
        placeholder='Comment'
        value={body}
        onChange={handleChange}
      />

      <sc.ArrowBtn onClick={onClick} />
    </sc.Container>
  );
};

// CommentCreate.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentCreate);
