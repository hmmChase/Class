import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../../context/contexts';
import BtnReqPass from '../../domains/user/BtnReqPass/BtnReqPass';
import * as sc from './Account.style';

const Account = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <sc.Container>
      <h1>Account</h1>

      <h3>Request a password reset</h3>

      <BtnReqPass email={currentUser.email} />
    </sc.Container>
  );
};

// Account.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Account);
