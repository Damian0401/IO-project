import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './app/common/utils/theme';
import App from './app/layout/App';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const history = createBrowserHistory({ window });

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </React.StrictMode>
  </ChakraProvider>
);