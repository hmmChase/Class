import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../context/app';
import useFetch from '../../../api/useFetch';

import * as sc from './IconUser.style';

const IconUser = props => {
  const history = useHistory();
  const { setCurrentUser } = useContext(AppContext);
  const [getData] = useFetch('/users/logout');

  const onClick = async e => {
    e.preventDefault();

    await getData();

    setCurrentUser({});

    history.push('/');
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
