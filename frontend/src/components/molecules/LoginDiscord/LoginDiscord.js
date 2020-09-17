import React, { useEffect } from 'react';
import useFetch from '../../../api/useFetch';
import getParameterByName from '../../../utils/getParameterByName';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  // const [isLoggedIn] = useState(false);
  // const [loginError] = useState(null);

  const [signupDiscord] = useFetch('/discord/signup');

  useEffect(() => {
    (async () => {
      const code = getParameterByName('code');
      const state = getParameterByName('state');

      const user = await signupDiscord({ code, state });

      console.log('user:', user);

      //   if (user && user.id) setIsLoggedIn(true);
      //   if (user && user.message) setLoginError(user.message);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <sc.Container></sc.Container>;
};

export default LoginDiscord;
