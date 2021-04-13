import React, { useContext } from 'react';
import { CurrentUserContext, DiscordContext } from './';
import * as api from '../api/discordApi';

import instance from '../api/baseApi';

const DiscordProvider = props => {
  // const { setCurrentUser } = useContext(CurrentUserContext);

  // const [urlLogin] = api.useUrlLogin();

  const urlLogin = async () => await instance.get('/discord/url-login');

  // const [urlSignup] = api.useUrlSignup();

  const urlSignup = async () => await instance.get('/discord/url-signup');

  const loginDiscord = async options => await api.loginDiscord(options);

  // const loginDiscord = () =>
  //   api.useLoginDiscord({ onSuccess: data => setCurrentUser(data.data) });

  const signupDiscord = async options => await api.signupDiscord(options);

  // const signupDiscord = () => {
  //   console.log('sajdfhjjklsadfhj');

  //   return api.useSignupDiscord({
  //     onSuccess: data => setCurrentUser(data.data)
  //   });
  // };

  return (
    <DiscordContext.Provider
      value={{ urlLogin, urlSignup, loginDiscord, signupDiscord }}
    >
      {props.children}
    </DiscordContext.Provider>
  );
};

export default DiscordProvider;
