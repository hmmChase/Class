import React, { useContext } from 'react';
import { CurrentUserContext, DiscordContext } from './contexts';
import * as api from '../api/discordApi';

const DiscordProvider = props => {
  const { setCurrentUser } = useContext(CurrentUserContext);

  const [urlLogin] = api.useUrlLogin();

  const loginDiscord = (code, state) =>
    api.useLoginDiscord({
      variables: { code, state },

      onSuccess: data => {
        console.log('data:', data);

        setCurrentUser(data.data);
      }
    });

  return (
    <DiscordContext.Provider value={{ urlLogin, loginDiscord }}>
      {props.children}
    </DiscordContext.Provider>
  );
};

export default DiscordProvider;
