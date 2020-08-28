import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => props.theme.colors.backgrounds.widgetsHeader};
  box-shadow: 0 0 0.4rem 0.4rem rgba(0, 0, 0, 0.1);
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
    position: absolute;
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.h3``;

export const Desc = styled.p`
  font-size: clamp(0.8rem, 2.4vw, 1.2rem);
  line-height: 1.3;
  margin: 0.1rem 0 1rem 0;
`;
