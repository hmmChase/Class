import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context';
import * as sc from './DropdownUserIcon.style';

import { useLogout } from '../../../hooks/user';

const DropdownUserIcon = props => {
  const { setCurrentUser } = useContext(UserContext);

  const mutation = useLogout({ onSuccess: () => setCurrentUser(false) });

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
        <span onClick={() => mutation.mutate()}>Log Out</span>
      </li>
    </sc.Dropdownn>
  );
};

// DropdownUserIcon.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownUserIcon);
