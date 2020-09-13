import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  align-items: center;

  /* flex: 0 0 100%; */

  justify-content: space-between;

  /* flex-grow: 1; */
  /* flex-basis: 1; */

  @media screen and (min-width: 720px) {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.text.titleText};
  font-family: 'Courier New', Courier, monospace;
  font-size: clamp(1rem, 3vw, 1.5rem);
  letter-spacing: 0.3rem;
  margin: 0;
  text-transform: uppercase;
`;
