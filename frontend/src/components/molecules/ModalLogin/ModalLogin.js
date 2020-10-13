import React from 'react';
// import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal/Modal';
import LoginEmail from '../LoginEmail/LoginEmail';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
import * as sc from './ModalLogin.style';

const ModalLogin = props => (
  <Modal close={props.close}>
    <sc.Heading>Log in</sc.Heading>

    <LoginEmail />

    <sc.HRule />

    <sc.Heading>Log in with Discord</sc.Heading>

    <LoginDiscord />

    <sc.HRule />

    <sc.Heading>Forgot your password?</sc.Heading>

    <ResetPassRequest />
  </Modal>
);

// ModalLogin.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ModalLogin);
