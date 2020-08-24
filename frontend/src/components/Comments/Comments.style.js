import styled from 'styled-components';

export const Container = styled.div`
  /* border-radius: 10px; */
  list-style: none;
  /* overflow-y: scroll; */

  > li {
    margin-bottom: 0.5rem;
  }

  > li:last-child {
    margin-bottom: 0;
  }

  /* ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-track:vertical {
    background-color: ${props => props.theme.colors.backgrounds.features};
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  ::-webkit-scrollbar-track-piece:vertical {
    background-color: ${props => props.theme.colors.backgrounds.features};
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    margin: 5px;
  }

  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.backgrounds.cards};
    border: 5px solid ${props => props.theme.colors.backgrounds.features};
  }

  @media screen and (min-width: 1000px) {
    position: absolute;
    left: 5px;
    top: 280px;
    right: 5px;
    bottom: 5px;
    overflow: auto;
  } */
`;
