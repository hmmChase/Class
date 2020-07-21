import React from 'react';
// import PropTypes from 'prop-types';
import * as sc from './Header.style';

const Header = props => (
  <sc.Container>
    <sc.KnightIcon />

    <sc.Title>challenge board</sc.Title>

    <sc.UserIcon />
  </sc.Container>
);

// Header.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Header);
