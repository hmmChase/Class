import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import useFetch from '../../../api/useFetch';
import Desc from '../../atoms/Desc/Desc';
import DOMPurify from 'dompurify';
import { useCreateQuestion } from '../../../api/questionApi';
import * as sc from './QuestionCreate.style';

const QuestionCreate = props => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { challengePath } = useParams();

  // const [createQuestion] = useFetch(`/question/create/${challengePath}`);

  const [createQuestion, response] = useCreateQuestion({
    onSuccess: data => {
      console.log('data:', data);

      // const updatedQuestions = [data.data, ...props.questions];

      // props.setQuestions(updatedQuestions);

      // props.close();
    }
  });

  console.log('response:', response);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'title') setTitle(cleanValue);

    if (e.target.id === 'body') setBody(cleanValue);
  };

  const handleCancel = () => props.close();

  const handleSubmit = async e => {
    e.preventDefault();

    // const newQuestion = await createQuestion({ challengePath, title, body });

    try {
      await createQuestion({ challengePath, title, body });
    } catch (error) {
      console.log('QuestionCreate error: ', error);
    }

    // const updatedQuestions = [newQuestion, ...props.questions];

    // props.setQuestions(updatedQuestions);

    props.close();
  };

  return (
    <sc.Form className={props.className} onSubmit={handleSubmit}>
      <sc.Titlee>Post a Question</sc.Titlee>

      <Desc>Make sure to add enough detail to provide context for others.</Desc>

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

      <sc.Buttonns>
        <sc.ButtonCancel onClick={handleCancel}>Cancel</sc.ButtonCancel>

        <sc.Buttonn type='submit'>Post</sc.Buttonn>
      </sc.Buttonns>
    </sc.Form>
  );
};

export default QuestionCreate;
