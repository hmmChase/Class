import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Input.style';

const Input = props => {
  const {
    className,
    id,
    name,
    type,
    value,
    onChange,
    placeholder,
    required
  } = props;

  return (
    <sc.Input
      className={className}
      aria-label={props['aria-label']}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

Input.propTypes = {
  className: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.any,
  onChange: PropTypes.any,
  placeholder: PropTypes.any,
  required: PropTypes.any,
  type: PropTypes.any,
  value: PropTypes.any
};

export default React.memo(Input);
