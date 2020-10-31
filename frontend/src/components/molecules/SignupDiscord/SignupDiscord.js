import React, { useContext } from 'react';
import { DiscordContext } from '../../../context/contexts';
import IconDiscord from '../IconDiscord/IconDiscord';
import * as sc from './SignupDiscord.style';

const SignupDiscord = () => {
  const { urlSignup } = useContext(DiscordContext);

  const handleClick = async () => {
    const response = urlSignup();

    window.location.assign(response.data);
  };

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Sign up with Discord
    </sc.Buttonn>
  );
};

export default SignupDiscord;
