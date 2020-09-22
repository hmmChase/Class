import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import * as sc from './CommentCreate.style';

const CommentCreate = props => {
  const [body, setBody] = useState('');

  const onChange = e => {
    const bodyClean = DOMPurify.sanitize(e.target.value);

    setBody(bodyClean);
  };

  const onClick = e => {
    e.preventDefault();

    props.handleCreateComment(body);

    setBody('');
  };

  return (
    <sc.Container>
      <sc.AddInput
        type='text'
        placeholder='Comment'
        value={body}
        onChange={onChange}
      />

      <sc.ArrowBtn onClick={onClick} />
    </sc.Container>
  );
};

// CommentCreate.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentCreate);
