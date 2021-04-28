import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Title.style';

const Title = props => {
  const { className, children } = props;

  return <sc.H3 className={className}>{children}</sc.H3>;
};

Title.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any
};

export default React.memo(Title);
