import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChallengePage from './pages/challenge';
import LoginDiscordRedirectPage from './pages/login-discord';
import SignupDiscordRedirectPage from './pages/signup-discord';
import ResetPasswordPage from './pages/reset-password';
import IndexPage from './pages/index';
import UserProvider from './context/UserProvider';

const App = () => (
  <UserProvider>
    <Router>
      <Switch>
        <Route path='/login-discord'>
          <LoginDiscordRedirectPage />
        </Route>

        <Route path='/signup-discord'>
          <SignupDiscordRedirectPage />
        </Route>

        <Route path='/reset-password?resetToken'>
          <ResetPasswordPage />
        </Route>

        <Route path='/reset-password'>
          <ResetPasswordPage />
        </Route>

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
  </UserProvider>
);

export default App;
