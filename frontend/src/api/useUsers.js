import { useState, useEffect } from 'react';
import request from '../utils/request';

export default () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('/users');

        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return users;
};
