import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { CommentContext } from '../../../context';
import { useCommentCreate } from '../../../hooks/comment';
import * as sc from './CommentCreate.style';

const CommentCreate = props => {
  const { questionId } = props;

  const [body, setBody] = useState('');

  const { comments, setComments } = useContext(CommentContext);

  const mutation = useCommentCreate({
    onSuccess: data => {
      const updatedComments = [...comments, data.data];

      setComments(updatedComments);
    }
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const onClick = e => {
    e.preventDefault();

    mutation.mutate({ questionId, body });

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

CommentCreate.propTypes = {
  questionId: PropTypes.any
};

export default React.memo(CommentCreate);
