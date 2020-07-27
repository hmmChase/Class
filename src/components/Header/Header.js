import React from 'react';
import useModal from '../../utils/useModal';
import Modal from '../Modal/Modal';
import SignOn from '../SignOn/SignOn';
import * as sc from './Header.style';

const Header = props => {
  const [isModalOpen, toggleModal] = useModal();

  // const [user] = useLogin();

  // console.log('Header user:', user);

  return (
    <sc.Container>
      <sc.KnightIcon />

      <sc.Title>challenge board</sc.Title>

      <sc.UserIcon onClick={toggleModal}>
        {props.user ? (
          // <img src={props.user.avatarUrl} />
          <sc.UserIconDefined src={'http://picsum.photos/40'} />
        ) : (
          <sc.UserIconDefault />
        )}
      </sc.UserIcon>

      {isModalOpen && (
        <Modal close={toggleModal}>
          <SignOn />
        </Modal>
      )}
    </sc.Container>
  );
};

export default Header;
