import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Desc.style';

const Desc = props => {
  const { children } = props;

  return <sc.P>{children}</sc.P>;
};

Desc.propTypes = {
  children: PropTypes.any
};

export default React.memo(Desc);
