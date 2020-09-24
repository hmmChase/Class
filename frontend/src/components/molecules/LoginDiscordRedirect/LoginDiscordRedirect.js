import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getParameterByName';
import { CurrentUser } from '../../../context/contexts';
import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { setCurrentUser } = useContext(CurrentUser);

  const history = useHistory();

  const [loginDiscord, loading, error] = useFetch('/discord/login');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const user = await loginDiscord({ code, state });

      if (!loading && !error && user && user.id) setCurrentUser(user);

      history.push('/');
    })();

    // eslint-disable-next-line
  }, []);

  return <sc.Container></sc.Container>;
};

export default LoginDiscordRedirect;
