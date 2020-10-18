import React from 'react';
import IconDiscord from '../IconDiscord/IconDiscord';
import { useUrlLogin } from '../../../api/discordApi';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const [urlLogin] = useUrlLogin({
    onSuccess: data => {
      if (data && data.data) window.location.assign(data.data);
    }
  });

  const handleClick = async () => {
    try {
      await urlLogin();
    } catch (error) {
      // console.log('LoginDiscord error: ', error);
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
