import React, { useState } from 'react';
import Desc from '../../atoms/Desc/Desc';
import DOMPurify from 'dompurify';
import { useCreateProject } from '../../../api/projectApi';
import * as sc from './ProjectCreate.style';

const ProjectCreate = props => {
  const [githubLink, setGithubLink] = useState('');
  const [additionalLink, setAdditionalLink] = useState('');
  const [comments, setComment] = useState('');

  const [createProject] = useCreateProject({
    onSuccess: data => {
      const updatedQuestions = [data.data, ...props.questions];

      props.setQuestions(updatedQuestions);

      props.close();
    }
  });

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'github-link') setGithubLink(cleanValue);

    if (e.target.id === 'additional-link') setAdditionalLink(cleanValue);

    if (e.target.id === 'comments') setComment(cleanValue);
  };

  const handleCancel = () => props.close();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const project = await createProject({
        githubLink,
        additionalLink,
        comments
      });

      if (project && project.createdAt) {
        props.setSubmittedDate(project.createdAt);

        props.setIsSubmitted(true);
      }
    } catch (error) {
      // console.log('LoginEmail error: ', error);
    }
  };

  return (
    <sc.Form className={props.className} onSubmit={handleSubmit}>
      <sc.Titlee>Submit your Project</sc.Titlee>

      <Desc>Provide your Github and any additional relevent links.</Desc>

      <sc.InputTitle
        id='github-link'
        placeholder='Github Link'
        value={githubLink}
        onChange={handleChange}
      />

      <sc.InputTitle
        id='additional-link'
        placeholder='Additional Link (optional)'
        value={additionalLink}
        onChange={handleChange}
      />

      <sc.TextAreaBody
        id='comments'
        placeholder='Comments (optional)'
        value={comments}
        onChange={handleChange}
      />

      <sc.Buttons>
        <sc.ButtonCancel onClick={handleCancel}>Cancel</sc.ButtonCancel>

        <sc.Buttonn type='submit'>Submit</sc.Buttonn>
      </sc.Buttons>
    </sc.Form>
  );
};

export default ProjectCreate;
