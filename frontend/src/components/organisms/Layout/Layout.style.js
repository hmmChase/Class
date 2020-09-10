import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    padding: 0 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Header = styled.header``;

export const Main = styled.main``;
