import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import * as sc from './SubmissionSubmit.style';

const SubmissionSubmit = props => (
  <sc.Container className={props.className}>
    <sc.Label>SUBMISSION</sc.Label>

    <sc.Title>Submit Your Project</sc.Title>

    <sc.Desc>
      When you're ready, submit your Github link here for review.
    </sc.Desc>

    <Button>Submit Project</Button>
  </sc.Container>
);

SubmissionSubmit.propTypes = {
  className: PropTypes.string
};

export default React.memo(SubmissionSubmit);
