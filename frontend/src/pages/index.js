import React from 'react';
import SignOn from '../components/SignOn/SignOn';
import { Link } from 'react-router-dom';

const IndexPage = () => (
  <>
    <h1>Challenge Board</h1>

    <SignOn />

    <p>
      <Link to='/challenge'>challenge</Link>
    </p>

    <p>
      <Link to='/login'>login</Link>
    </p>

    <p>
      <Link to='/login-discord'>login-discord</Link>
    </p>

    <p>
      <Link to='/reset-password'>reset-password</Link>
    </p>

    <p>
      <Link to='/signup'>signup</Link>
    </p>

    <p>
      <Link to='/signup-discord'>signup-discord</Link>
    </p>
  </>
);

export default IndexPage;
