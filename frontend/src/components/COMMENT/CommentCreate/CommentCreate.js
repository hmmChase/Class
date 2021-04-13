import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { CommentContext } from '../../../context';
import { useCommentCreate } from '../../../hooks';
import * as sc from './CommentCreate.style';

const CommentCreate = props => {
  const [body, setBody] = useState('');

  const { comments, setComments } = useContext(CommentContext);

  const mutationCommentCreate = useCommentCreate({
    variables: { questionId: props.questionId, body },
    onSuccess: async data => {
      const gotData = await data;

      const updatedComments = [...comments, gotData.data];

      setComments(updatedComments);
    }
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const onClick = e => {
    e.preventDefault();

    mutationCommentCreate.mutate(props.questionId, body);

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
