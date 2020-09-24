import React from 'react';
import useFetch from '../../../api/useFetch';
import Button from '../../atoms/Button/Button';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const [loginDiscord] = useFetch('/discord/url-login');

  const handleClick = async () => {
    const discordUrl = await loginDiscord();

    window.location.assign(discordUrl);
  };

  return (
    <sc.Container>
      <Button onClick={handleClick}>Login with Discord</Button>
    </sc.Container>
  );
};

export default LoginDiscord;
