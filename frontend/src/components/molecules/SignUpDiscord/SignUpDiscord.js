import React from 'react';
import useFetch from '../../../api/useFetch';
import Button from '../../atoms/Button/Button';
import * as sc from './SignUpDiscord.style';

const SignUpDiscord = () => {
  const [signupDiscord] = useFetch('/discord/url');

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

export default SignUpDiscord;
