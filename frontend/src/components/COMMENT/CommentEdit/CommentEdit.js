import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { CommentContext } from '../../../context';
import { useCommentUpdate } from '../../../hooks/comment';
import * as sc from './CommentEdit.style';

const CommentEdit = props => {
  const { children, id, setIsEditing } = props;

  const [body, setBody] = useState(children);

  const { setComments } = useContext(CommentContext);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const mutation = useCommentUpdate({
    onSuccess: data => setComments(data.data)
  });

  const handleClick = () => {
    mutation.mutate({ id, body });

    setIsEditing(false);
  };

  return (
    <sc.Container>
      <sc.TextArea value={body} onChange={handleChange} autoFocus />

      <sc.Buttons>
        <sc.ButtonCancel onClick={() => setIsEditing(false)}>
          Cancel
        </sc.ButtonCancel>

        <sc.Buttonn onClick={handleClick}>Save</sc.Buttonn>
      </sc.Buttons>
    </sc.Container>
  );
};

CommentEdit.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
  setIsEditing: PropTypes.func
};

export default React.memo(CommentEdit);
