import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { CurrentUser } from '../../../context/contexts';
import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  // const { setCurrentUser } = useContext(CurrentUser);

  // const history = useHistory();

  console.log('asdflkjsadlf');

  const [signupDiscord, loading, error] = useFetch('/discord/signup');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');

      const state = getParameterByName('state');

      const user = await signupDiscord({ code, state });

      console.log('user:', user);

      // if (!loading && !error && user && user.id) setCurrentUser(user);

      // history.push('/');
    })();

    // eslint-disable-next-line
  }, []);

  return <sc.Container></sc.Container>;
};

export default SignupDiscordRedirect;
