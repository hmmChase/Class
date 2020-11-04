import styled from 'styled-components';
import Title from '../../REUSEABLE/Title/Title';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
  /* padding: 1.5rem 1.2rem; */
  padding: 1.5rem;
`;

export const Titlee = styled(Title)`
  color: ${props => props.theme.colors.text.primaryText};
`;

export const Video = styled.div`
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  margin-bottom: 1rem;

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;
