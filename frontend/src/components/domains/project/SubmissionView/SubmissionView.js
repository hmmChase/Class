import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Label from '../../../reuseable/Label/Label';
import Title from '../../../reuseable/Title/Title';
import Desc from '../../../reuseable/Desc/Desc';
import Button from '../../../reuseable/Button/Button';
import * as sc from './SubmissionView.style';

const SubmissionView = props => (
  <sc.Container className={props.className}>
    <Label>SUBMISSION</Label>

    <Title>View Student Submissions</Title>

    <Desc>Project submissions page</Desc>

    <Link to={'/submissions'}>
      <Button>View Submissions</Button>
    </Link>
  </sc.Container>
);

SubmissionView.propTypes = {
  className: PropTypes.string
};

export default SubmissionView;
