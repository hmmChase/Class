import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../../utils/getQueryParamByName';
import { DiscordContext } from '../../../../context/contexts';
// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { loginDiscord } = useContext(DiscordContext);

  const history = useHistory();

  useEffect(() => {
    const code = getParameterByName('code');
    const state = getParameterByName('state');

    loginDiscord(code, state);

    history.push('/');

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default LoginDiscordRedirect;
