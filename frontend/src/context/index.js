import { createContext } from 'react';

export const CurrentUserContext = createContext({
  currentUser: {},
  setCurrentUser: () => {}
});

export const DiscordContext = createContext({});

export const ChallengeContext = createContext({});

export const ProjectContext = createContext({});

export const QuestionContext = createContext({});

export const CommentContext = createContext({});
