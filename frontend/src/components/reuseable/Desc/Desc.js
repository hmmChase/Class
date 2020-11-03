import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './Desc.style';

const Desc = props => <sc.P>{props.children}</sc.P>;

Desc.propTypes = {
  // children: PropTypes.string.isRequired
};

export default React.memo(Desc);
