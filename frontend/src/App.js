import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChallengePage from './pages/challenge';
// import LoginPage from './pages/login';
import LoginDiscordRedirectPage from './pages/login-discord';
import SignupDiscordRedirectPage from './pages/signup-discord';
import ResetPasswordPage from './pages/reset-password';
// import SignupPage from './pages/signup';
// import SignupDiscordPage from './pages/signup-discord';
import IndexPage from './pages/index';
import useFetch from './api/useFetch';
import AppContext from './context/app';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [getCurrentUser, loading, error] = useFetch('/user/current');

  useEffect(() => {
    (async () => {
      const currentUser = await getCurrentUser();

      if (
        !loading &&
        !error &&
        currentUser &&
        currentUser.user &&
        currentUser.user.id
      )
        setCurrentUser(currentUser.user);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>
      <Router>
        <Switch>
          <Route path='/login-discord'>
            <LoginDiscordRedirectPage />
          </Route>

          <Route path='/signup-discord'>
            <SignupDiscordRedirectPage />
          </Route>

          <Route path='/reset-password/:resetToken'>
            <ResetPasswordPage />
          </Route>

          <Route path='/reset-password'>
            <ResetPasswordPage />
          </Route>

          {/* <Route path='/signup'>
            <SignupPage />
          </Route> */}

          {/* <Route path='/signup-discord'>
            <SignupDiscordPage />
          </Route> */}

          <Route path='/:challengePath/:questionId'>
            <ChallengePage />
          </Route>

          <Route path='/:challengePath'>
            <ChallengePage />
          </Route>

          <Route path='/'>
            <IndexPage />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
