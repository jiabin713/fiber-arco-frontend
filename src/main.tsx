import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
