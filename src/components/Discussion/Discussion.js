import React from 'react';
// import PropTypes from 'prop-types';
import Questions from '../Questions/Questions';
import Button from '../Button/Button';
import * as sc from './Discussion.style';

const Discussion = props => (
  <sc.Container>
    <sc.Label>DISCUSSION</sc.Label>

    <sc.Title>Ask a Question</sc.Title>

    <Button>Post a Question</Button>

    <Questions />
  </sc.Container>
);

// Discussion.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Discussion);
