import React from 'react';
// import PropTypes from 'prop-types';
import Modal from '../../atoms/Modal/Modal';
import SignupEmail from '../SignupEmail/SignupEmail';
import SignupDiscord from '../SignupDiscord/SignupDiscord';
// import * as sc from './ModalSignup.style';

const ModalSignup = props => (
  <Modal close={props.close}>
    <p>Signup Email</p>

    <SignupEmail />

    <p>Signup Discord</p>

    <SignupDiscord />
  </Modal>
);

// ModalSignup.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ModalSignup);
