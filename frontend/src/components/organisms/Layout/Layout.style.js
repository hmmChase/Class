import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 720px) {
    padding: 0 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Header = styled.header``;

export const Main = styled.main`
  @media screen and (min-width: 720px) {
    margin-bottom: 1rem;
  }
`;
