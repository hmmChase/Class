import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  margin: 0 auto;
  max-width: max(1000px);
`;

export const Header = styled.header`
  margin-bottom: 1rem;

  @media screen and (min-width: 500px) {
    margin-bottom: 0;
  }
`;

export const Main = styled.main`
  max-width: calc(500px + 2rem);

  @media screen and (min-width: 500px) {
    padding: 2rem;
  }

  @media screen and (min-width: 1000px) {
    max-width: 100%;
  }
`;
