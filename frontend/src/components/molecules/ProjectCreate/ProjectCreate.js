import React, { useState, useContext } from 'react';
import Desc from '../../atoms/Desc/Desc';
import DOMPurify from 'dompurify';
import { ProjectContext } from '../../../context/contexts';
import * as sc from './ProjectCreate.style';

const ProjectCreate = props => {
  const [githubLink, setGithubLink] = useState('');

  const [additionalLink, setAdditionalLink] = useState('');

  const [comments, setComment] = useState('');

  const { createProject } = useContext(ProjectContext);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    if (e.target.id === 'github-link') setGithubLink(cleanValue);

    if (e.target.id === 'additional-link') setAdditionalLink(cleanValue);

    if (e.target.id === 'comments') setComment(cleanValue);
  };

  const handleCancel = () => props.close();

  const handleSubmit = e => {
    e.preventDefault();

    const response = createProject({ githubLink, additionalLink, comments });

    if (response && response.data && response.data.createdAt) {
      props.setSubmittedDate(response.data.createdAt);

      props.setIsSubmitted(true);

      props.close();
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
