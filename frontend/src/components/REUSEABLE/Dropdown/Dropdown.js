import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import * as sc from './Dropdown.style';

const Dropdown = props => {
  const { className, close, children } = props;

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, close);

  return (
    <sc.Container className={className} ref={ref}>
      <sc.Ul>{children}</sc.Ul>
    </sc.Container>
  );
};

Dropdown.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  close: PropTypes.any
};

export default React.memo(Dropdown);
