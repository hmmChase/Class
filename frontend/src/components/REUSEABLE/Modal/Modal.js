import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import * as sc from './Modal.style';

const Modal = props => {
  const { close, children } = props;

  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, close);

  return (
    <sc.Container>
      <sc.Outer />

      <sc.Inner ref={ref}>{children}</sc.Inner>
    </sc.Container>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  close: PropTypes.any
};

export default React.memo(Modal);
