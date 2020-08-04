import { useState, useEffect } from 'react';
import request from '../utils/request';

export default () => {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('/replies');

        setReplies(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return replies;
};
