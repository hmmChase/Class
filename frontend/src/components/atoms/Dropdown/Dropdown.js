import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import useOnClickOutside from '../../../utils/useOnClickOutside';
import * as sc from './Dropdown.style';

const Dropdown = props => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, props.close);

  return (
    <sc.Container className={props.className} ref={ref}>
      <sc.Dropdown>
        <sc.Ul>{props.children}</sc.Ul>
      </sc.Dropdown>
    </sc.Container>
  );
};

Dropdown.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default React.memo(Dropdown);
