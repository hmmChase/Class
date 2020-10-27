import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { CurrentUserContext } from '../../../context/contexts';
// import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const history = useHistory();

  const [signupDiscord, loading, error] = useFetch('/discord/signup');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');

      const state = getParameterByName('state');

      const user = await signupDiscord({ code, state });

      if (!loading && !error && user && user.id) setCurrentUser(user);

      history.push('/');
    })();

    // eslint-disable-next-line
  }, []);

  return <div />;
};

export default SignupDiscordRedirect;
