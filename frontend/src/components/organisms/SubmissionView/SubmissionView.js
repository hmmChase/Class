import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import Title from '../../atoms/Title/Title';
import Desc from '../../atoms/Desc/Desc';
import Button from '../../atoms/Button/Button';
import * as sc from './SubmissionView.style';

const SubmissionView = props => (
  <sc.Container className={props.className}>
    <Label>SUBMISSION</Label>

    <Title>View Student Submissions</Title>

    <Desc>Project submissions page</Desc>

    <Button>View Submissions</Button>
  </sc.Container>
);

SubmissionView.propTypes = {
  className: PropTypes.string
};

export default SubmissionView;
