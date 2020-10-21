import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChallengePage from './pages/challenge';
import LoginDiscordRedirectPage from './pages/login-discord';
import SignupDiscordRedirectPage from './pages/signup-discord';
import ResetPasswordPage from './pages/reset-password';
import IndexPage from './pages/index';
import AccountPage from './pages/account';
import UserProvider from './context/UserProvider';
import DiscordProvider from './context/DiscordProvider';

const App = () => (
  <UserProvider>
    <DiscordProvider>
      <Router>
        <Switch>
          <Route path='/signup-discord'>
            <SignupDiscordRedirectPage />
          </Route>

          <Route path='/login-discord'>
            <LoginDiscordRedirectPage />
          </Route>

          <Route path='/account'>
            <AccountPage />
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
    </DiscordProvider>
  </UserProvider>
);

export default App;
