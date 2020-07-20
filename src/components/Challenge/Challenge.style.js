import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.backgrounds.widgetsHeader};
  padding: 1rem;
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
