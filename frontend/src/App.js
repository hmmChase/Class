import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChallengePage from './pages/challenge';
import LoginDiscordRedirectPage from './pages/login-discord';
import SignupDiscordRedirectPage from './pages/signup-discord';
import ResetPasswordPage from './pages/reset-password';
import IndexPage from './pages/index';
import useFetch from './api/useFetch';
import AppContext from './context/app';

import { useQuery, QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryCache = new QueryCache();

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  // const [getCurrentUser, loading, error] = useFetch('/user/current');

  const { isLoading, error, data } = useQuery('userData', async () => {
    const optionsObj = { method: 'GET', credentials: 'include' };

    const response = await fetch(
      'http://localhost:4000/api/v1/user/current',
      optionsObj
    );

    const userData = await response.json();

    setCurrentUser(userData.user);
  });

  // if (!isLoading && data && data.user && data.user.id) {
  //   setCurrentUser(data.user);
  // }

  useEffect(() => {
    (async () => {})();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
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
      </ReactQueryCacheProvider>

      <ReactQueryDevtools initialIsOpen />
    </>
  );
};

export default App;
