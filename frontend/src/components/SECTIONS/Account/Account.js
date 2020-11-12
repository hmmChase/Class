import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { CurrentUserContext } from '../../../context/contexts';
import BtnReqPass from '../../USER/BtnReqPass/BtnReqPass';
import * as sc from './Account.style';

const Account = () => {
  const [issubmitted, setIsSubmitted] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  return (
    <sc.Container>
      <h1>Account</h1>

      <h3>Request a password reset</h3>

      <BtnReqPass email={currentUser.email} setIsSubmitted={setIsSubmitted} />

      {issubmitted && <p>Check your email for a password reset link.</p>}
    </sc.Container>
  );
};

// Account.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Account);
