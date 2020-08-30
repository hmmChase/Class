import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../atoms/Label/Label';
import Title from '../../atoms/Title/Title';
import Desc from '../../atoms/Desc/Desc';
import Button from '../../atoms/Button/Button';
import * as sc from './SubmissionSubmit.style';

const SubmissionSubmit = props => (
  <sc.Container className={props.className}>
    <Label>SUBMISSION</Label>

    <Title>Submit Your Project</Title>

    <Desc>When you're ready, submit your Github link here for review.</Desc>

    <Button>Submit Project</Button>
  </sc.Container>
);

SubmissionSubmit.propTypes = {
  className: PropTypes.string
};

export default SubmissionSubmit;
