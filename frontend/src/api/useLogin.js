import { useState } from 'react';
import request from '../utils/request';

export default (email, password) => {
  const [user, setUser] = useState([]);

  const login = async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    };

    try {
      const data = await request('/login', options);

      setUser(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { user, login };
};
