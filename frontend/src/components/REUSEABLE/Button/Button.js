import React from 'react';
import PropTypes from 'prop-types';
import * as sc from './Button.style';

const Button = props => {
  const { className, onClick, children } = props;

  return (
    <sc.Button className={className} onClick={onClick}>
      {children}
    </sc.Button>
  );
};

Button.propTypes = {
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default React.memo(Button);
