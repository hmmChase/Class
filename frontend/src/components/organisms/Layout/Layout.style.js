import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  /* background-color: ${props => props.theme.colors.backgrounds.fullApp}; */
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* justify-content: center; */

  /* align-items: center; */

  /* flex: 0 0 100%; */

  @media screen and (min-width: 800px) {
    padding: 0 1rem;
    margin: 0 auto;

    /* max-width: none; */
    /* max-width: 800px; */
    /* width: 75%; */
  }

  @media screen and (min-width: 1200px) {
    /* max-width: 1200px; */
  }
`;

export const Header = styled.header`
  /* flex-basis: 1; */
  /* flex-grow: 1; */

  @media screen and (min-width: 800px) {
    /* margin-bottom: 0; */
  }
`;

export const Main = styled.main`
  /* max-width: calc(500px + 2rem); */

  @media screen and (min-width: 800px) {
    /* padding: 2rem; */
  }

  @media screen and (min-width: 1200px) {
    /* max-width: 100%; */
  }
`;
