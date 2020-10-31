import React from 'react';
// import PropTypes from 'prop-types';
import Title from '../../atoms/Title/Title';
import Desc from '../../atoms/Desc/Desc';
import * as sc from './ProjectSubmitted.style';

const ProjectSubmitted = () => (
  <sc.Container>
    <Title>Your project has been submitted!</Title>

    <Desc>Look for an email confirmation shortly.</Desc>
  </sc.Container>
);

// ProjectSubmitted.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ProjectSubmitted);
