import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './InputLabel.style';

const InputLabel = props => {
  const { children } = props;

  return <sc.Label>{children}</sc.Label>;
};

InputLabel.propTypes = {
  children: PropTypes.any
};

export default React.memo(InputLabel);
