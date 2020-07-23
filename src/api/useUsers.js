import { useState, useEffect } from 'react';
import request from './request';

const userUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('users');

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return users;
};

export default userUsers;
