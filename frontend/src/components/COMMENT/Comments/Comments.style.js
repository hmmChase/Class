import styled from 'styled-components';
import CommentCard from '../CommentCard/CommentCard';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};

  @media screen and (min-width: 720px) {
    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 1.5rem;
    }

    ::-webkit-scrollbar-track:vertical {
      background-color: ${props => props.theme.colors.backgrounds.features};
      /* border-bottom-right-radius: 0.5rem; */
      /* border-top-right-radius: 0.5rem; */
    }

    ::-webkit-scrollbar-track-piece:vertical {
      background-color: ${props => props.theme.colors.backgrounds.features};
      /* border-bottom-right-radius: 0.5rem; */
      /* border-top-right-radius: 0.5rem; */
    }

    ::-webkit-scrollbar-thumb:vertical {
      border-radius: 1rem;
      background-color: ${props => props.theme.colors.backgrounds.cards};
      border: 5px solid ${props => props.theme.colors.backgrounds.features};
    }
  }
`;

export const CommentsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CommentCardd = styled(CommentCard)`
  /* :not(:last-child) {
    margin-bottom: 0.5rem;
  } */
`;
