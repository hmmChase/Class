import { useState, useEffect } from 'react';
import request from './request';

const useThreads = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('threads');

        setThreads(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return threads;
};

export default useThreads;
