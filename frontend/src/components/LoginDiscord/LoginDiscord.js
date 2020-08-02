import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { discordSignup } from '../../api/DiscordApi';
import getParameterByName from '../../utils/getParameterByName';

const LoginDiscord = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(undefined);

  // useEffect(() => {
  //   const code = getParameterByName('code');
  //   const state = getParameterByName('state');

  //   (async () => {
  //     const user = await discordSignUp(code, state);

  //     if (user.id) setIsLoggedIn(true);
  //   })();
  // }, []);

  const onClick = async () => {
    const code = getParameterByName('code');
    const state = getParameterByName('state');

    const user = await discordSignup(code, state);

    if (user && user.id) setIsLoggedIn(true);
    if (user && user.message) setLoginError(user.message);
  };

  return (
    <div>
      <button onClick={onClick}>Login Discord</button>

      {isLoggedIn && <Redirect to='/challenge' />}

      {loginError && (
        <div>
          Login Error: <pre>{JSON.stringify(loginError)}</pre>
        </div>
      )}
    </div>
  );
};

export default LoginDiscord;
