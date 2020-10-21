import React, { useContext } from 'react';
import IconDiscord from '../IconDiscord/IconDiscord';
import { Discord } from '../../../context/contexts';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const { urlLogin } = useContext(Discord);

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
