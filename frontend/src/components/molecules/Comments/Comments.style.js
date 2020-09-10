import styled from 'styled-components';
import CommentCard from '../CommentCard/CommentCard';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  height: 100%;
`;

export const Relative = styled.div`
  @media screen and (min-width: 800px) {
    position: relative;
    height: 100%;
  }
`;

export const Absolute = styled.div`
  @media screen and (min-width: 800px) {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    border-radius: 0.5rem;
  }

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track:vertical {
    background-color: ${props => props.theme.colors.backgrounds.features};
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  ::-webkit-scrollbar-track-piece:vertical {
    background-color: ${props => props.theme.colors.backgrounds.features};
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 1rem;
    background-color: ${props => props.theme.colors.backgrounds.cards};
    border: 5px solid ${props => props.theme.colors.backgrounds.features};
  }
`;

export const CommentsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const CommentCardd = styled(CommentCard)`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
