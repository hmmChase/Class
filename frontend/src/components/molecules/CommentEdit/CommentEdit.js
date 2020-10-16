import React, { useState } from 'react';
import DOMPurify from 'dompurify';
// import PropTypes from 'prop-types';
import * as sc from './CommentEdit.style';

const CommentEdit = props => {
  const [body, setBody] = useState(props.children);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setBody(cleanValue);
  };

  const handleClick = async e => {
    // const updatedComments = await commentUpdate({ id: props.id, body });
    props.handleUpdateComment(props.id, body);

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
