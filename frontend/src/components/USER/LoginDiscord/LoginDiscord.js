import React, { useContext } from 'react';
import IconDiscord from '../../OTHER/IconDiscord/IconDiscord';
import { DiscordContext } from '../../../context/contexts';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const { urlLogin } = useContext(DiscordContext);

  const handleClickLogin = async () => {
    const response = await urlLogin();

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
