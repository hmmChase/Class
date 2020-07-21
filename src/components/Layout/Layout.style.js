import styled from 'styled-components';

//! Mobile first

export const Container = styled.div`
  background-color: ${props => props.theme.colors.backgrounds.fullApp};
  margin: 0 auto;
  max-width: max(900px);

  /* display: flex;	*/
  /* flex-direction: column;	*/
  /* justify-content: center;	*/
  /* align-items: center;	*/
  /* min-height: 100vh;	*/
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const Main = styled.main`
  /* margin: 2rem;	*/
`;
