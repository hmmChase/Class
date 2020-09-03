import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Modal.style';

const Modal = props => (
  <sc.Container>
    <sc.Outer onClick={props.close} />

    <sc.Inner>{props.children}</sc.Inner>
  </sc.Container>
);

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  close: PropTypes.func.isRequired
};

export default React.memo(Modal);
