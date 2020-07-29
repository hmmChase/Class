import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.style';
import theme from './styles/theme.style';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
