import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CurrentUser } from '../../../context/contexts';
import { useLogout } from '../../../api/userApi';
import * as sc from './DropdownUserIcon.style';

const DropdownUserIcon = props => {
  const { setCurrentUser } = useContext(CurrentUser);

  const [logout] = useLogout({ onSuccess: () => setCurrentUser({}) });

  const handleClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('logout error: ', error);
    }
  };

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
        <span onClick={handleClick}>Log Out</span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownUserIcon.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownUserIcon);
