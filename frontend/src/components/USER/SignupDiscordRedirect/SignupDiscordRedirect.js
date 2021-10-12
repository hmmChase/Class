import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { DiscordContext, UserContext } from '../../../context';
// import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  const { signupDiscord } = useContext(DiscordContext);

  const { setCurrentUser } = useContext(UserContext);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const response = await signupDiscord({ code, state });

      if (response && response.data && response.data.id) {
        setCurrentUser(response.data);

        history.push('/');
      }
    })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default SignupDiscordRedirect;
