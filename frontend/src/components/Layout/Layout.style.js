import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  max-width: 1200px;

  @media screen and (min-width: 1200px) {
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  margin-bottom: 1rem;

  @media screen and (min-width: 600px) {
    /* margin-bottom: 0; */
  }
`;

export const Main = styled.main`
  /* max-width: calc(500px + 2rem); */

  @media screen and (min-width: 600px) {
    /* padding: 2rem; */
  }

  @media screen and (min-width: 1200px) {
    /* max-width: 100%; */
  }
`;
