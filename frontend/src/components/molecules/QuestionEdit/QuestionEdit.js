import React, { useState } from 'react';
import DOMPurify from 'dompurify';
// import PropTypes from 'prop-types';
import * as sc from './QuestionEdit.style';

const QuestionEdit = props => {
  console.log('props:', props);
  const [title, setTitle] = useState(props.children);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setTitle(cleanValue);
  };

  const handleClick = async e => {
    props.handleUpdateQuestion(props.id, title, props.body);

    props.setIsEditing(false);
  };

  return (
    <sc.Container>
      <sc.TextArea value={title} onChange={handleChange} autoFocus />

      <sc.Buttons>
        <sc.ButtonCancel onClick={() => props.setIsEditing(false)}>
          Cancel
        </sc.ButtonCancel>

        <sc.Buttonn onClick={handleClick}>Save</sc.Buttonn>
      </sc.Buttons>
    </sc.Container>
  );
};

// QuestionEdit.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(QuestionEdit);
