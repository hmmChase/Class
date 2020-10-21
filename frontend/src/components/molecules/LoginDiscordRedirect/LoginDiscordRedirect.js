import React, { useEffect, useContext } from 'react';
import useFetch from '../../../api/useFetch';
import { useHistory } from 'react-router-dom';
import getParameterByName from '../../../utils/getQueryParamByName';
import { CurrentUser } from '../../../context/contexts';
import { useLoginDiscord } from '../../../api/discordApi';

// import * as sc from './LoginDiscordRedirect.style';

const LoginDiscordRedirect = () => {
  const { setCurrentUser } = useContext(CurrentUser);

  const history = useHistory();

  const code = getParameterByName('code');
  const state = getParameterByName('state');

  useLoginDiscord(
    {
      onSuccess: data => {
        setCurrentUser(data.data);

        history.push('/');
      }
    },
    { code, state }
  );

  return <div />;
};

export default LoginDiscordRedirect;

// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import getParameterByName from '../../../utils/getQueryParamByName';
// import { useLoginDiscord } from '../../../api/discordApi';
// // import * as sc from './LoginDiscordRedirect.style';

// const LoginDiscordRedirect = () => {
//   const [loginDiscord] = useLoginDiscord();
//   console.log('loginDiscord:', loginDiscord);

//   // const history = useHistory();

//   useEffect(() => {
//     (async () => {
//       const code = getParameterByName('code');
//       console.log('code:', code);
//       const state = getParameterByName('state');
//       console.log('state:', state);

//       try {
//         // await loginDiscord({ code, state });
//         // history.push('/');
//       } catch (error) {
//         // console.log('loginDiscord error: ', error);
//       }
//     })();

//     // eslint-disable-next-line
//   }, []);

//   return <div />;
// };

// export default LoginDiscordRedirect;
