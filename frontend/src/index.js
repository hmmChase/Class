import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.style';
import theme from './styles/theme.style';

const queryCache = new QueryCache();

Sentry.init({
  dsn:
    'https://af1ece5485bb4726ae5bfec97848a1a4@o473121.ingest.sentry.io/5507739'

  // integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  // tracesSampleRate: 1.0
});

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
