import React, { useContext } from 'react';
import { CurrentUserContext, DiscordContext } from './contexts';
import * as api from '../api/discordApi';

const DiscordProvider = props => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [urlLogin] = api.useUrlLogin();

  const [urlSignup] = api.useUrlSignup();

  const loginDiscord = (code, state) =>
    api.useLoginDiscord({
      variables: { code, state },

      onSuccess: data => {
        setCurrentUser(data.data);
      }
    });

  const signupDiscord = (code, state) =>
    api.useLoginDiscord({
      variables: { code, state },

      onSuccess: data => {
        setCurrentUser(data.data);
      }
    });

  return (
    <DiscordContext.Provider
      value={{ urlLogin, urlSignup, loginDiscord, signupDiscord }}
    >
      {props.children}
    </DiscordContext.Provider>
  );
};

export default DiscordProvider;
