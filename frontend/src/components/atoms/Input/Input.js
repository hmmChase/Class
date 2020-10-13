import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import * as sc from './Input.style';

const Input = props => {
  const [value, setValue] = useState(props.value);

  const handleChange = e => {
    const cleanValue = DOMPurify.sanitize(e.target.value);

    props.onChange(() => setValue(cleanValue));
  };

  return (
    <sc.Input
      className={props.className}
      aria-label={props['aria-label']}
      id={props.id}
      // name={props.name}
      type={props.type}
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      // onBlur={props.onBlur}
      required={props.required}
    />
  );
};

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
