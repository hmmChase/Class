import { useState } from 'react';

const request = async (pathName, options, body) => {
  const APIversion = 'v1';

  const urlBase =
    process.env.NODE_ENV === 'production'
      ? `https://challenge-board.vercel.app/api/${APIversion}`
      : `http://localhost:4000/api/${APIversion}`;

  const url = `${urlBase}${pathName}`;

  try {
    let response;

    if (body) {
      const optionsObj = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        credentials: 'include',
        ...options
      };

      response = await fetch(url, optionsObj);
    } else {
      const optionsObj = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        credentials: 'include',
        ...options
      };
      response = await fetch(url, optionsObj);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
  }
};

const useFetch = (pathName, options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async body => {
    setLoading(true);

    try {
      const response = await request(pathName, options, body);

      setLoading(false);

      return response;
    } catch (error) {
      setError(error);

      setLoading(false);
    }
  };

  return [getData, { loading, error }];
};

export default useFetch;
