import React from 'react';
import PropTypes from 'prop-types';
import useModal from '../../../utils/useModal';
import Modal from '../../atoms/Modal/Modal';
import SignupEmail from '../SignupEmail/SignupEmail';
import SignupDiscord from '../SignupDiscord/SignupDiscord';
import * as sc from './BtnSignup.style';

const BtnSignup = () => {
  const [isModalOpen, toggleModal] = useModal();

  return (
    <>
      <sc.Buttonn onClick={toggleModal}>Sign Up</sc.Buttonn>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <sc.Tabss
            option1={{ title: 'Signup Email', body: <SignupEmail /> }}
            option2={{ title: 'Signup Discord', body: <SignupDiscord /> }}
          />
        </Modal>
      )}
    </>
  );
};

BtnSignup.propTypes = {
  className: PropTypes.string
};

export default React.memo(BtnSignup);
