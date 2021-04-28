import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context';
import { useQuestionUpdate } from '../../../hooks/question';
import * as sc from './QuestionEdit.style';

const QuestionEdit = props => {
  const { children, body, id, setIsEditing } = props;

  const [title, setTitle] = useState(children);

  const { challengePath } = useParams();

  const { setQuestions } = useContext(QuestionContext);

  const mutation = useQuestionUpdate({
    onSuccess: data => setQuestions(data.data)
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    setTitle(cleanValue);
  };

  const handleClick = async () => {
    mutation.mutate({ challengePath, title, body, id });

    setIsEditing(false);
  };

  return (
    <sc.Container>
      <sc.TextArea value={title} onChange={handleChange} autoFocus />

      <sc.Buttons>
        <sc.ButtonCancel onClick={() => setIsEditing(false)}>
          Cancel
        </sc.ButtonCancel>

        <sc.Buttonn onClick={handleClick}>Save</sc.Buttonn>
      </sc.Buttons>
    </sc.Container>
  );
};

QuestionEdit.propTypes = {
  body: PropTypes.any,
  children: PropTypes.any,
  id: PropTypes.any,
  setIsEditing: PropTypes.func
};

export default React.memo(QuestionEdit);
