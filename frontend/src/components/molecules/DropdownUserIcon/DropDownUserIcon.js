import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUser } from '../../../context/contexts';
import { useLogout } from '../../../api/userApi';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import * as sc from './DropdownUserIcon.style';

const DropdownUserIcon = props => {
  const { setCurrentUser } = useContext(CurrentUser);

  const [logout] = useLogout({ onSuccess: () => setCurrentUser({}) });

  const onClick = async () => {
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
        <span onClick={onClick}>Log Out</span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownUserIcon.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownUserIcon);
