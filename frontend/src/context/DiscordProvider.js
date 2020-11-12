import React, { useContext } from 'react';
import { CurrentUserContext, DiscordContext } from './contexts';
import * as api from '../api/discordApi';

const DiscordProvider = props => {
  // const { setCurrentUser } = useContext(CurrentUserContext);

  const [urlLogin] = api.useUrlLogin();

  const [urlSignup] = api.useUrlSignup();

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
