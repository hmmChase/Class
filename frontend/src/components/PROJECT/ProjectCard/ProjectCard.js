import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/dateTime';
import * as sc from './ProjectCard.style';

const ProjectCard = props => {
  const { project } = props;

  return (
    <sc.Container className={props.className}>
      <p>submitted: {formatDate(project.createdAt)}</p>

      <p>email: {project.author.email}</p>

      <p>githubLink: {project.githubLink}</p>

      <p>additionalLink: {project.additionalLink}</p>

      <p>comments: {project.comments}</p>
    </sc.Container>
  );
};

// additionalLink: "www.google.com"
// author: {id: 2, createdAt: "2020-11-03T01:54:55.924Z", updatedAt: "2020-11-03T01:54:55.925Z", deletedAt: null, email: "student1@email.com", …}
// author_id: 2
// challenge_Id: 1
// comments: "Here is my project"
// createdAt: "2020-11-03T01:54:57.350Z"
// deletedAt: null
// githubLink: "www.github.com"
// id: 1
// updatedAt: "2020-11-03T01:54:57.352Z"

ProjectCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string
};

export default React.memo(ProjectCard);
