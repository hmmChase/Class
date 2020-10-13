import React from 'react';
import useFetch from '../../../api/useFetch';
import IconDiscord from '../IconDiscord/IconDiscord';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const [loginDiscord] = useFetch('/discord/url-login');

  const handleClick = async () => {
    const discordUrl = await loginDiscord();

    window.location.assign(discordUrl);
  };

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Log in with Discord
    </sc.Buttonn>
  );
};

export default LoginDiscord;
