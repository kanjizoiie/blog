import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 1. import `ChakraProvider` component
import { ChakraProvider, color, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { I18nextProvider } from 'react-i18next';
import setup from './i18n/setup';
import App from './App';
import './index.scss';

const theme = extendTheme({
  config: {},
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('skyblue', 'darkblue')(props),
      },
    }),
  },
});

ReactDOM.render(
  <I18nextProvider i18n={setup}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </I18nextProvider>,
  document.getElementById('root'),
);
