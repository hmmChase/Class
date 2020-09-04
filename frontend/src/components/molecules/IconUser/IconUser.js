import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';
import useFetch from '../../../api/useFetch';
import * as sc from './IconUser.style';

const IconUser = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);
  const [getData, loading, error] = useFetch('/user/logout');

  const onClick = async e => {
    e.preventDefault();

    await getData();

    if (!loading && !error) setCurrentUser({});
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
