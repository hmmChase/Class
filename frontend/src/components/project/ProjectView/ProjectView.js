import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import Label from '../../REUSEABLE/Label/Label';
import Title from '../../REUSEABLE/Title/Title';
import Desc from '../../REUSEABLE/Desc/Desc';
import Button from '../../REUSEABLE/Button/Button';
import * as sc from './ProjectView.style';

const ProjectView = props => {
  const { challengePath } = useParams();

  return (
    <sc.Container className={props.className}>
      <Label>SUBMISSION</Label>

      <Title>View Student Submissions</Title>

      <Desc>Project submissions page</Desc>

      <Link to={`/${challengePath}/submissions`}>
        <Button>View Submissions</Button>
      </Link>
    </sc.Container>
  );
};

ProjectView.propTypes = {
  className: PropTypes.string
};

export default ProjectView;
