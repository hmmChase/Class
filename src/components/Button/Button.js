import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Button.style';

const Button = props => (
  <sc.Button className={props.className}>{props.children}</sc.Button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default React.memo(Button);
