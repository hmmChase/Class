import React from 'react';

import IconDiscord from '../../OTHER/IconDiscord/IconDiscord';
import { useLoginUrl } from '../../../hooks/discord';
import * as sc from './LoginDiscord.style';

const LoginDiscord = () => {
  const mutation = useLoginUrl({
    onSuccess: (data, variables, context) => window.location.assign(data.data)
  });

  const handleClick = () => mutation.mutate({});

  return (
    <sc.Buttonn onClick={handleClick}>
      <IconDiscord />
      Log in with Discord
    </sc.Buttonn>
  );
};

export default LoginDiscord;
