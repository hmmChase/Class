import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../../context';
import * as sc from './DropdownUserIcon.style';

const DropdownUserIcon = props => {
  const { logout } = useContext(CurrentUserContext);

  return (
    <sc.Dropdownn
      className={props.className}
      isDropdownOpen={props.isDropdownOpen}
      close={props.close}
    >
      <li>
        <Link to={'/account'}>
          <span>Settings</span>
        </Link>
      </li>

      <li>
        <span onClick={() => logout()}>Log Out</span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownUserIcon.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownUserIcon);
