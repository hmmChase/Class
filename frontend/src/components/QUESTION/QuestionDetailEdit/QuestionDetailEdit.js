import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
import { QuestionContext } from '../../../context';
import { useQuestionUpdate } from '../../../hooks/question';
import * as sc from './QuestionDetailEdit.style';

const QuestionDetailEdit = props => {
  const { title, body, id, setIsEditing } = props;

  const [titleNew, setTitle] = useState(title);

  const [bodyNew, setBody] = useState(body);

  const { challengePath } = useParams();

  const { questions, setQuestions } = useContext(QuestionContext);

  const mutation = useQuestionUpdate({
    onSuccess: data => {
      const updatedQuestions = [questions, ...data.data];

      setQuestions(updatedQuestions);
    }
  });

  const handleChange = e => {
    if (e.target.name === 'title') setTitle(DOMPurify.sanitize(e.target.value));

    if (e.target.name === 'body') setBody(DOMPurify.sanitize(e.target.value));
  };

  const handleClick = async () => {
    mutation.mutate({ challengePath, title: titleNew, body: bodyNew, id });

    setIsEditing(false);
  };

  return (
    <sc.Container>
      <sc.TextArea
        name='title'
        value={titleNew}
        onChange={handleChange}
        autoFocus
      />

      <sc.TextArea name='body' value={bodyNew} onChange={handleChange} />

      <sc.Buttons>
        <sc.ButtonCancel onClick={() => setIsEditing(false)}>
          Cancel
        </sc.ButtonCancel>

        <sc.Buttonn onClick={handleClick}>Save</sc.Buttonn>
      </sc.Buttons>
    </sc.Container>
  );
};

QuestionDetailEdit.propTypes = {
  body: PropTypes.any,
  children: PropTypes.any,
  id: PropTypes.any,
  setIsEditing: PropTypes.func
};

export default React.memo(QuestionDetailEdit);
