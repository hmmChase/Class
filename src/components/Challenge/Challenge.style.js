import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  padding: 1rem;

  > p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export const Label = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  margin: 0;
`;

export const Title = styled.h3`
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0.1rem 0 1rem 0;
  font-size: clamp(1.2rem, 4vw, 2.2rem);
  color: ${props => props.theme.colors.buttons.primaryText};
`;
