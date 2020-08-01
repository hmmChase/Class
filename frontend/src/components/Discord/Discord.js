import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';

const Discord = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState(undefined);

  useEffect(() => {
    const code = getParameterByName('code');
    const state = getParameterByName('state');

    async () => {
      const user = await discordSignUp(code, state);

      if (user.id) setIsLoggedIn(true);
    };
  }, []);

  return (
    <div>
      {isLoggedIn && <Redirect to='/challenge' />}

      {loginError && (
        <div>
          Login Error: <pre>{JSON.stringify(loginError)}</pre>
        </div>
      )}
    </div>
  );
};

// Discord.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(Discord);
