import { useState, useEffect } from 'react';
import request from '../utils/request';

export default () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await request('/questions');

        setQuestions(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return questions;
};
