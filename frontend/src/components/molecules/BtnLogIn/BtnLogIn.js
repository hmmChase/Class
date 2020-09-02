import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import LoginEmail from '../LoginEmail/LoginEmail';
import ResetPassRequest from '../ResetPassRequest/ResetPassRequest';
import LoginDiscord from '../LoginDiscord/LoginDiscord';
import * as sc from './BtnLogIn.style';

const BtnLogIn = props => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <>
      <sc.Buttonn onClick={toggleModal}>Log In</sc.Buttonn>
      {isModalOpen && (
        <Modal close={toggleModal}>
          <p>Login Email</p>

          <LoginEmail />

          <p>Reset Pass Request</p>

          <ResetPassRequest />

          <p>Login Discord</p>

          <LoginDiscord />
        </Modal>
      )}
    </>
  );
};

BtnLogIn.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnLogIn);
