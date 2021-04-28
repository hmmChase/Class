import { useLocation } from 'react-router-dom';

const getQueryString = name => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queries = new URLSearchParams(useLocation().search);

  return queries.get(name);
};

export default getQueryString;
