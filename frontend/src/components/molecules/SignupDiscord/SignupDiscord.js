import React from 'react';
import useFetch from '../../../api/useFetch';
import IconDiscord from '../IconDiscord/IconDiscord';
import * as sc from './SignupDiscord.style';

const SignupDiscord = () => {
  const [signupDiscord] = useFetch('/discord/url-signup');

  const handleClick = async () => {
    const discordUrl = await signupDiscord();

    window.location.assign(discordUrl);
  };

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Sign up with Discord
    </sc.Buttonn>
  );
};

export default SignupDiscord;
