import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Button.style';

const Button = props => (
  <sc.Button className={props.className} onClick={props.onClick}>
    {props.children}
  </sc.Button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default React.memo(Button);
