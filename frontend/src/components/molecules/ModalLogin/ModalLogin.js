import React from 'react';
// import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal/Modal';
import LoginEmail from '../LoginEmail/LoginEmail';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
// import * as sc from './ModalLogin.style';

const ModalLogin = props => (
  <Modal close={props.close}>
    <p>Login Email</p>

    <LoginEmail />

    <p>Login Discord</p>

    <LoginDiscord />

    <p>Reset Password?</p>

    <ResetPassRequest />
  </Modal>
);

// ModalLogin.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ModalLogin);
