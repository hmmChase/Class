import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  padding: 1.5rem 1.2rem;

  > p {
    color: ${props => props.theme.colors.text.secondaryText};
  }
`;

export const Video = styled.div`
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
  margin-bottom: 1rem;

  iframe {
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;

export const Label = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  margin: 0 0 0.2rem 0;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.buttons.primaryText};
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: clamp(1.2rem, 4vw, 2.2rem);
  margin: 0 0 1rem 0;
`;

export const Desc = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  line-height: 1.3;
  margin: 0.1rem 0 1rem 0;
`;
