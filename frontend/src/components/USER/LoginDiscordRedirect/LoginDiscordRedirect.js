import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { DiscordContext, CurrentUserContext } from '../../../context';
// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { loginDiscord } = useContext(DiscordContext);

  const { setCurrentUser } = useContext(CurrentUserContext);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const response = await loginDiscord({ code, state });

      if (response && response.data && response.data.id) {
        setCurrentUser(response.data);

        history.push('/');
      }
    })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default LoginDiscordRedirect;
