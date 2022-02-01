import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { useSignupDiscord } from '../../../hooks/discord';
import { UserContext } from '../../../context';
// import * as sc from './SignupDiscordRedirect.style';

const SignupDiscordRedirect = () => {
  const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const code = getParameterByName('code');

  const state = getParameterByName('state');

  useSignupDiscord({
    variables: { code, state },

    onSuccess: (data, variables, context) => {
      setCurrentUser(data.data);

      navigate.push('/');
    }
  });

  return <div />;
};

export default SignupDiscordRedirect;
