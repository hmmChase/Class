import { createContext } from 'react';

export const CurrentUser = createContext({
  currentUser: {},
  setCurrentUser: () => {}
});
