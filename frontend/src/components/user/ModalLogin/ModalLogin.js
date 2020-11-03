import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Modal from '../../reuseable/Modal/Modal';
import LoginEmail from '../LoginEmail/LoginEmail';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import * as sc from './ModalLogin.style';

const ModalLogin = props => {
  const [showPassReset, setShowPassReset] = useState(false);

  const toggleShowPassReset = () => setShowPassReset(!showPassReset);

  return (
    <Modal close={props.close}>
      {showPassReset ? (
        <ResetPassRequest toggleShowPassReset={toggleShowPassReset} />
      ) : (
        <>
          <sc.Heading>
            <sc.HRule />

            <sc.HeadingTitle3>Log in</sc.HeadingTitle3>

            <sc.HRule />
          </sc.Heading>

          <LoginEmail toggleShowPassReset={toggleShowPassReset} />

          <sc.Heading>
            <sc.HRule />

            <sc.HeadingTitle3>or</sc.HeadingTitle3>

            <sc.HRule />
          </sc.Heading>

          <LoginDiscord />
        </>
      )}
    </Modal>
  );
};

// ModalLogin.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ModalLogin);
