import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import SignUpEmail from '../SignUpEmail/SignUpEmail';
import SignUpDiscord from '../SignUpDiscord/SignUpDiscord';
import * as sc from './BtnSignUp.style';

const BtnSignUp = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <>
      <sc.Buttonn onClick={toggleModal}>Sign Up</sc.Buttonn>
      {isModalOpen && (
        <Modal close={toggleModal}>
          <p>SignUp Email</p>

          <SignUpEmail />

          <p>SignUp Discord</p>

          <SignUpDiscord />
        </Modal>
      )}
    </>
  );
};

BtnSignUp.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnSignUp);
