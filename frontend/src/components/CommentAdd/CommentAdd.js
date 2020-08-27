import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import useFetch from '../../api/useFetch';
import * as sc from './CommentAdd.style';

const CommentAdd = props => {
  const [body, setBody] = useState('');
  const [getData] = useFetch('/comments/create');

  const handleClick = async e => {
    e.preventDefault();

    await getData({ questionId: props.questionId, body });
  };

  return (
    <sc.Container>
      <sc.AddInput
        type='text'
        placeholder='Comment'
        value={body}
        onChange={e => setBody(e.target.value)}
      />

      <sc.ArrowBtn onClick={handleClick} />
    </sc.Container>
  );
};

// CommentAdd.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentAdd);
