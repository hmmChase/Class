import { useState } from 'react';
import { BASE_URL, API_VERSION, errorCodeToMessage } from '../config';

// const handleErrorArray = errCodeArray => errCodeArray.map(handleErrors);

const handleErrors = errorCode => {
  const loginErrorMessage = errorCodeToMessage[errorCode];

  if (loginErrorMessage) return loginErrorMessage;

  return errorCodeToMessage.default;
};

const request = async (pathName, options, body) => {
  const url = `${BASE_URL}/api/${API_VERSION}${pathName}`;

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
        credentials: 'include',
        ...options
      };

      response = await fetch(url, optionsObj);
    }

    return await response.json();
  } catch (err) {
    // console.error(err);
  }
};

const useFetch = (pathName, options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async body => {
    setLoading(true);

    try {
      const response = await request(pathName, options, body);

      if (response && response.error) {
        const errorMessage = handleErrors(response.error);

        setError(errorMessage);
      }

      setLoading(false);

      return response;
    } catch (error) {
      setError(error);

      setLoading(false);
    }
  };

  return [getData, loading, error];
};

export default useFetch;
