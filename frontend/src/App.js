import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUpPage from './pages/signUp';
import DiscordPage from './pages/discord';
import ChallengePage from './pages/challenge';

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path='/signup'>
              <SignUpPage />
            </Route>

            <Route path='/discord-login'>
              <DiscordPage />
            </Route>

            <Route path='/challenge'>
              <ChallengePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
