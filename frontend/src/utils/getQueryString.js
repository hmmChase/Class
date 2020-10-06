import { useLocation } from 'react-router-dom';

export default name => {
  const queries = new URLSearchParams(useLocation().search);

  return queries.get(name);
};
