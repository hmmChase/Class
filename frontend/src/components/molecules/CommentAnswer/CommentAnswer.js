import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './CommentAnswer.style';

const CommentAnswer = props => (
  <sc.Container>
    <div>comment answer</div>
  </sc.Container>
);

// CommentAnswer.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(CommentAnswer);
