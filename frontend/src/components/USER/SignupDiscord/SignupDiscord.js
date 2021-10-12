import React from 'react';

import IconDiscord from '../../OTHER/IconDiscord/IconDiscord';
import { useSignupUrl } from '../../../hooks/discord';
import * as sc from './SignupDiscord.style';

const SignupDiscord = () => {
  const mutation = useSignupUrl({
    onSuccess: (data, variables, context) => window.location.assign(data.data)
  });

  const handleClick = () => mutation.mutate({});

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Sign up with Discord
    </sc.Buttonn>
  );
};

export default SignupDiscord;
