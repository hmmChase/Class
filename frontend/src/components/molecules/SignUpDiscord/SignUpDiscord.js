import React from 'react';
import useFetch from '../../../api/useFetch';
import Button from '../../atoms/Button/Button';
import * as sc from './SignupDiscord.style';

const SignupDiscord = () => {
  const [signupDiscord] = useFetch('/discord/url-signup');

  const handleClick = async () => {
    const discordUrl = await signupDiscord();

    window.location.assign(discordUrl);
  };

  return (
    <sc.Container>
      <Button onClick={handleClick}>Sign up with Discord</Button>
    </sc.Container>
  );
};

export default SignupDiscord;
