import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUser } from '../../../context/contexts';
import { useLogout } from '../../../api/userApi';
import Dropdown from '../../atoms/Dropdown/Dropdown';
// import * as sc from './DropdownUserIcon.style';

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
    <Dropdown close={props.close}>
      <p onClick={onClick}>Log Out</p>
    </Dropdown>
  );
};

// DropdownUserIcon.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownUserIcon);
