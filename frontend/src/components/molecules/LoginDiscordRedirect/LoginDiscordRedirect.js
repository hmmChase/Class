import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { DiscordContext } from '../../../context/contexts';
// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { loginDiscord } = useContext(DiscordContext);

  const history = useHistory();

  useEffect(() => {
    // (async () => {
    const code = getParameterByName('code');
    console.log('code:', code);
    const state = getParameterByName('state');
    console.log('state:', state);

    try {
      loginDiscord(code, state);

      // if (response.isSuccess) history.push('/');

      history.push('/');
    } catch (error) {
      // console.log('loginDiscord error: ', error);
    }
    // })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default LoginDiscordRedirect;
