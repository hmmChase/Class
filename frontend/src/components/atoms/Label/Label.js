import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Label.style';

const Label = props => <sc.P>{props.children}</sc.P>;

Label.propTypes = {
  children: PropTypes.string.isRequired
};

export default React.memo(Label);
