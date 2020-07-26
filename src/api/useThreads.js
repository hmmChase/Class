import { useState, useEffect } from 'react';
import request from '../utils/request';

export default () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('/threads');

        setThreads(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return threads;
};
