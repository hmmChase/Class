import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import * as sc from './CommentAdd.style';

const CommentAdd = props => {
  const [body, setBody] = useState('');

  return (
    <sc.Container>
      <sc.AddInput
        type='text'
        placeholder='Comment'
        value={body}
        onChange={e => setBody(e.target.value)}
      />

      <sc.ArrowBtn onClick={() => props.handleCreateComment(body)} />
    </sc.Container>
  );
};

// CommentAdd.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentAdd);
