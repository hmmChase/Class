import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChallengePage from './pages/challenge';
import LoginDiscordRedirectPage from './pages/login-discord';
import SignupDiscordRedirectPage from './pages/signup-discord';
import ResetPasswordPage from './pages/reset-password';
import IndexPage from './pages/index';
import AccountPage from './pages/account';
import SubmissionsPage from './pages/submissions';
import UserProvider from './context/UserProvider';
import ChallengeProvider from './context/ChallengeProvider';
import ProjectProvider from './context/ProjectProvider';
import QuestionProvider from './context/QuestionProvider';
import CommentProvider from './context/CommentProvider';

const App = () => (
  <UserProvider>
    <ChallengeProvider>
      <ProjectProvider>
        <QuestionProvider>
          <CommentProvider>
            <Router>
              <Routes>
                <Route
                  path='/signup-discord'
                  element={<SignupDiscordRedirectPage />}
                ></Route>

                <Route
                  path='/login-discord'
                  element={<LoginDiscordRedirectPage />}
                ></Route>

                <Route path='/account' element={<AccountPage />}></Route>

                <Route
                  path='/reset-password'
                  element={<ResetPasswordPage />}
                ></Route>

                <Route
                  path='/:challengePath/submissions'
                  element={<SubmissionsPage />}
                ></Route>

                <Route
                  path='/:challengePath/:questionId'
                  element={<ChallengePage />}
                ></Route>

                <Route
                  path='/:challengePath'
                  element={<ChallengePage />}
                ></Route>

                <Route path='/' element={<IndexPage />}></Route>
              </Routes>
            </Router>
          </CommentProvider>
        </QuestionProvider>
      </ProjectProvider>
    </ChallengeProvider>
  </UserProvider>
);

export default App;
