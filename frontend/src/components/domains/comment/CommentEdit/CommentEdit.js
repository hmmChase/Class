import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { CommentContext } from '../../../../context/contexts';
// import PropTypes from 'prop-types';
import * as sc from './CommentEdit.style';

const CommentEdit = props => {
  const [body, setBody] = useState(props.children);

  const { updateComment } = useContext(CommentContext);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const handleClick = () => {
    updateComment(props.id, body);

    props.setIsEditing(false);
  };

  return (
    <sc.Container>
      <sc.TextArea value={body} onChange={handleChange} autoFocus />

      <sc.Buttons>
        <sc.ButtonCancel onClick={() => props.setIsEditing(false)}>
          Cancel
        </sc.ButtonCancel>

        <sc.Buttonn onClick={handleClick}>Save</sc.Buttonn>
      </sc.Buttons>
    </sc.Container>
  );
};

// CommentEdit.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentEdit);
