import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../../utils/getQueryParamByName';
import { DiscordContext } from '../../../../context/contexts';
// import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  const { signupDiscord } = useContext(DiscordContext);

  const history = useHistory();

  useEffect(() => {
    // (async () => {

    const code = getParameterByName('code');
    const state = getParameterByName('state');

    signupDiscord({ code, state });

    history.push('/');

    // })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default SignupDiscordRedirect;
