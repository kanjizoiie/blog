import * as React from 'react';
import * as ReactDOM from 'react-dom';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

import './index.scss';
import App from './App';

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
