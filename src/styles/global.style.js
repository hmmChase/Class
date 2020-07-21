import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${props => props.theme.colors.backgrounds.body};
    color: ${props => props.theme.colors.text.primaryText};
  }
`;
