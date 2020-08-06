import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChallengePage from './pages/challenge';
import LoginPage from './pages/login';
import LoginDiscordPage from './pages/login-discord';
import ResetPasswordPage from './pages/reset-password';
import SignUpPage from './pages/signup';
import SignUpDiscordPage from './pages/signup-discord';
import IndexPage from './pages/index';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path='/challenge'>
              <ChallengePage />
            </Route>

            <Route path='/login'>
              <LoginPage />
            </Route>

            <Route path='/login-discord'>
              <LoginDiscordPage />
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
              <IndexPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
