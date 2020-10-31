import React, { useContext } from 'react';
import IconDiscord from '../IconDiscord/IconDiscord';
import { DiscordContext } from '../../../context/contexts';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const { urlLogin } = useContext(DiscordContext);

  const handleClickLogin = () => {
    const response = urlLogin();

    window.location.assign(response.data);
  };

  return (
    <sc.Buttonn onClick={handleClickLogin}>
      <IconDiscord />
      Log in with Discord
    </sc.Buttonn>
  );
};

export default LoginDiscord;
