import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Label.style';

const Label = props => {
  const { children } = props;

  return <sc.P>{children}</sc.P>;
};

Label.propTypes = {
  children: PropTypes.any
};

export default React.memo(Label);
