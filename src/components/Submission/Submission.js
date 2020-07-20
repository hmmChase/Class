import React from 'react';
// import PropTypes from 'prop-types';
import Button from '../Button/Button';
import * as sc from './Submission.style';

// - p.label
// - h3
// - p.desc
// - button.submit.Submission
//   * onClick
//     * display submit-Submission modal

const Submission = props => (
  <sc.Container>
    <sc.Label>SUBMISSION</sc.Label>

    <sc.Title>Submit Your Project</sc.Title>

    <sc.Desc>
      When you're ready, submit your Github link here for review.
    </sc.Desc>

    <Button>Submit Project</Button>
  </sc.Container>
);

// Submission.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Submission);
