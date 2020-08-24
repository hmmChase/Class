import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../context/app';
import SignOn from '../components/SignOn/SignOn';

const IndexPage = () => {
  // const { currentUser } = useContext(AppContext);

  // if (currentUser && currentUser.id) return <Redirect to='/challenge' />;

  return (
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
};

export default IndexPage;
