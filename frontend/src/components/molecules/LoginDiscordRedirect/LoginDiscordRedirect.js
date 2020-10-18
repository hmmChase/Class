import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { useLoginDiscord } from '../../../api/discordApi';
import { CurrentUser } from '../../../context/contexts';
// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { setCurrentUser } = useContext(CurrentUser);

  const history = useHistory();

  const [loginDiscord] = useLoginDiscord({
    onSuccess: data => {
      if (data && data.data && data.data.id) setCurrentUser(data.data.id);

      history.push('/');
    }
  });

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      try {
        await loginDiscord({ code, state });
      } catch (error) {
        // console.log('LoginDiscordRedirect error: ', error);
      }
    })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default LoginDiscordRedirect;
