import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './InputLabel.style';

const InputLabel = props => <sc.Label>{props.children}</sc.Label>;

// InputLabel.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(InputLabel);
