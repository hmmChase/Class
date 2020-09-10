import styled from 'styled-components';
import QuestionCard from '../QuestionCard/QuestionCard';

export const Container = styled.div`
  /* border-radius: 0.5rem; */
  /* background-color: red; */

  @media screen and (min-width: 800px) {
    height: 100%;

    overflow-y: auto;
  }
`;

export const Relative = styled.div`
  /* border-radius: 0.5rem; */

  @media screen and (min-width: 800px) {
    position: relative;

    height: 100%;

    overflow-y: auto;
  }
`;

export const Absolute = styled.div`
  @media screen and (min-width: 800px) {
    position: absolute;
    width: 100%;

    height: 100%;

    overflow-y: auto;
  }
`;

export const QuestionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  /* border-radius: 0.5rem; */
  /* background-color: red; */

  @media screen and (min-width: 800px) {
    /* width: 100%; */
    height: 100%;

    overflow-y: auto;

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
  }
`;

export const QuestionCardd = styled(QuestionCard)`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
