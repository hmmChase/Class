import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { UserContext } from '../../../context';
import { useLoginDiscord } from '../../../hooks/discord';
// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const code = getParameterByName('code');

  const state = getParameterByName('state');

  useLoginDiscord({
    variables: { code, state },

    onSuccess: (data, variables, context) => {
      setCurrentUser(data.data);

      navigate.push('/');
    }
  });

  return <div />;
};

export default LoginDiscordRedirect;
