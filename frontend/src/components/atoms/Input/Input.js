import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Input.style';

const Input = props => (
  <sc.Input
    className={props.className}
    aria-label={props['aria-label']}
    id={props.id}
    name={props.name}
    type={props.type}
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
    required={props.required}
  />
);

Input.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string
  // name: PropTypes.string.isRequired,
  // onBlur: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired
};

export default React.memo(Input);
