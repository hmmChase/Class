import React, { useContext } from 'react';
import { CurrentUser, Discord } from './contexts';
import * as api from '../api/discordApi';

const DiscordProvider = props => {
  const { setCurrentUser } = useContext(CurrentUser);

  const [urlLogin] = api.useUrlLogin();

  const [loginDiscord] = api.useLoginDiscord({
    onSuccess: data => setCurrentUser(data.data)
  });

  return (
    <Discord.Provider value={{ urlLogin, loginDiscord }}>
      {props.children}
    </Discord.Provider>
  );
};

export default DiscordProvider;
