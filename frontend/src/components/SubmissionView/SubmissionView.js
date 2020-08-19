import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import * as sc from './SubmissionView.style';

const SubmissionView = props => (
  <sc.Container className={props.className}>
    <sc.Label>SUBMISSION</sc.Label>

    <sc.Title>View Student Submissions</sc.Title>

    <sc.Desc>Project submissions page</sc.Desc>

    <Button>View Submissions</Button>
  </sc.Container>
);

SubmissionView.propTypes = {
  className: PropTypes.string
};

export default React.memo(SubmissionView);
