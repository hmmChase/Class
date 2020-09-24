import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.style';
import theme from './styles/theme.style';

const queryCache = new QueryCache();

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <App />
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen />
    </ReactQueryCacheProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
