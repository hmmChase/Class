import React, { useState, useContext } from 'react';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context';
// import PropTypes from 'prop-types';
import * as sc from './QuestionEdit.style';

const QuestionEdit = props => {
  const [title, setTitle] = useState(props.children);

  const { updateQuestion } = useContext(QuestionContext);

  const { challengePath } = useParams();

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setTitle(cleanValue);
  };

  const handleClick = async () => {
    updateQuestion(challengePath, title, props.body, props.id);

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
