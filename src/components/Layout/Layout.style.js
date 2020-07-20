import styled from "styled-components";

//! Mobile first

export const Container = styled.div`
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.backgrounds.fullApp};
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* min-height: 100vh; */

  @media screen and (min-width: 900px) {
    max-width: 900px;
  }
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const Main = styled.main`
  /* margin: 2rem; */
`;
