import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getParameterByName';
import AppContext from '../../../context/app';
import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { setCurrentUser } = useContext(AppContext);

  const history = useHistory();

  const [loginDiscord, loading, error] = useFetch('/discord/login');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const user = await loginDiscord({ code, state });

      console.log('user:', user);

      if (!loading && !error && user && user.user) setCurrentUser(user.user);

      history.push('/');
    })();

    // eslint-disable-next-line
  }, []);

  return <sc.Container></sc.Container>;
};

export default LoginDiscordRedirect;
