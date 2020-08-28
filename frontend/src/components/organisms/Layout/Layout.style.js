import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};

  @media screen and (min-width: 600px) {
    max-width: 640px;
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    max-width: none;
    width: 80%;
  }

  @media screen and (min-width: 1200px) {
    /* width: 80%; */
    /* margin: 0 auto; */
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
