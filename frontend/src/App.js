import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import ChallengePage from './pages/challenge';
import LoginPage from './pages/login';
import LoginDiscordPage from './pages/login-discord';
import ResetPasswordPage from './pages/reset-password';
import SignUpPage from './pages/signup';
import SignUpDiscordPage from './pages/signup-discord';
import IndexPage from './pages/index';
import useFetch from './api/useFetch';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [getData] = useFetch('/users/login-token');

  useEffect(() => {
    (async () => {
      const data = await getData();

      if (data && data.user && data.user.id) setIsLoggedIn(true);
    })();
  }, []);

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path='/challenge/:questionId'>
              <ChallengePage />
            </Route>

            <Route path='/challenge'>
              <ChallengePage />
            </Route>

            <Route path='/login'>
              <LoginPage />
            </Route>

            <Route path='/login-discord'>
              <LoginDiscordPage />
            </Route>

            <Route path='/reset-password/:resetToken'>
              <ResetPasswordPage />
            </Route>

            <Route path='/reset-password'>
              <ResetPasswordPage />
            </Route>

            <Route path='/signup'>
              <SignUpPage />
            </Route>

            <Route path='/signup-discord'>
              <SignUpDiscordPage />
            </Route>

            <Route path='/'>
              <IndexPage isLoggedIn={isLoggedIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
