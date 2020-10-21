import React from 'react';
import IconDiscord from '../IconDiscord/IconDiscord';
import { useUrlLogin } from '../../../api/discordApi';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const [urlLogin] = useUrlLogin();

  const handleClick = async () => {
    try {
      const { data } = await urlLogin();

      window.location.assign(data);
    } catch (error) {
      // console.log('urlLogin error: ', error);
    }
  };

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Log in with Discord
    </sc.Buttonn>
  );
};

export default LoginDiscord;
