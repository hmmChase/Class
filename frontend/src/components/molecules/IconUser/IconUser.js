import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CurrentUser } from '../../../context/contexts';
import { useLogout } from '../../../api/userApi';
import * as sc from './IconUser.style';

const IconUser = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUser);

  const [logout] = useLogout({ onSuccess: () => setCurrentUser({}) });

  const onClick = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('logout error: ', error);
    }
  };

  return (
    <sc.Container onClick={onClick}>
      {currentUser && currentUser.avatarUrl ? (
        <sc.IconUserDefined src={currentUser.avatarUrl} />
      ) : (
        <sc.IconUserDefault />
      )}
    </sc.Container>
  );
};

IconUser.propTypes = {
  currentUser: PropTypes.shape({
    avatarUrl: PropTypes.string
  })
};

export default React.memo(IconUser);
