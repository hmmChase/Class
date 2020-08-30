import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/app';
import useFetch from '../../../api/useFetch';

import * as sc from './IconUser.style';

const IconUser = props => {
  const { setCurrentUser } = useContext(AppContext);
  const [getData, { loading, error }] = useFetch('/users/logout');

  const onClick = async e => {
    e.preventDefault();

    await getData();

    if (!loading && !error) setCurrentUser({});
  };

  return (
    <sc.Container onClick={onClick}>
      {props.currentUser && props.currentUser.avatarUrl ? (
        <sc.IconUserDefined src={props.currentUser.avatarUrl} />
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
