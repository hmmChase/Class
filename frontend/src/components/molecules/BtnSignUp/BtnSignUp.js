import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import SignUpEmail from '../SignUpEmail/SignUpEmail';
import SignUpDiscord from '../SignUpDiscord/SignUpDiscord';
import * as sc from './BtnSignUp.style';

const BtnSignUp = () => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <>
      <sc.Buttonn onClick={toggleModal}>Sign Up</sc.Buttonn>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <sc.Tabss
            option1={{ title: 'SignUp Email', body: <SignUpEmail /> }}
            option2={{ title: 'SignUp Discord', body: <SignUpDiscord /> }}
          />
        </Modal>
      )}
    </>
  );
};

BtnSignUp.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnSignUp);
