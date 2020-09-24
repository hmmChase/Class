import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../../api/useFetch';
import Desc from '../../atoms/Desc/Desc';
import DOMPurify from 'dompurify';
import * as sc from './QuestionCreate.style';

const QuestionCreate = props => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { challengePath } = useParams();

  const [createQuestion] = useFetch(`/question/create/${challengePath}`);

  const handleChange = e => {
    const bodyClean = DOMPurify.sanitize(e.target.value);

    setBody(bodyClean);

    setTitle(e.target.value);

    setBody(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const newQuestion = await createQuestion({ title, body });

    const updatedQuestions = [newQuestion, ...props.questions];

    props.setQuestions(updatedQuestions);

    props.close();
  };

  return (
    <sc.Form className={props.className} onSubmit={handleSubmit}>
      <sc.Titlee>Post a Question</sc.Titlee>

      <Desc>
        Make sure to add enough detail to provide context for others.{' '}
      </Desc>

      <sc.InputTitle
        id='title'
        placeholder='Question'
        value={title}
        onChange={handleChange}
      />

      <sc.TextAreaBody
        id='body'
        placeholder='More Details'
        value={body}
        onChange={handleChange}
      />

      <sc.Buttonn type='submit'>Post Question</sc.Buttonn>
    </sc.Form>
  );
};

export default QuestionCreate;
