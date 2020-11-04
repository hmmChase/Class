import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import Label from '../../reuseable/Label/Label';
import Title from '../../reuseable/Title/Title';
import Desc from '../../reuseable/Desc/Desc';
import Button from '../../reuseable/Button/Button';
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
