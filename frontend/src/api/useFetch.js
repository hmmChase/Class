import { useState } from 'react';

const request = async (route, options, body) => {
  const RESTversion = 'v1';

  const urlBase =
    process.env.NODE_ENV === 'production'
      ? `https://challenge-board.vercel.app/api/${RESTversion}`
      : `http://localhost:4000/api/${RESTversion}`;

  const url = `${urlBase}${route}`;

  try {
    let response;

    if (options) {
      const optionsObj = {
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        credentials: 'include',
        ...options
      };

      response = await fetch(url, optionsObj);
    } else {
      response = await fetch(url);
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
