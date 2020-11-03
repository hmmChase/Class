import React from 'react';
// import PropTypes from 'prop-types';
import Modal from '../../reuseable/Modal/Modal';
import SignupEmail from '../SignupEmail/SignupEmail';
import SignupDiscord from '../SignupDiscord/SignupDiscord';
import * as sc from './ModalSignup.style';

const ModalSignup = props => (
  <Modal close={props.close}>
    <sc.Heading>
      <sc.HRule />

      <sc.HeadingTitle3>Sign up</sc.HeadingTitle3>

      <sc.HRule />
    </sc.Heading>

    <SignupEmail />

    <sc.Heading>
      <sc.HRule />

      <sc.HeadingTitle3>or</sc.HeadingTitle3>

      <sc.HRule />
    </sc.Heading>

    <SignupDiscord />
  </Modal>
);

// ModalSignup.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(ModalSignup);
