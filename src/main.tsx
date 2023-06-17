import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routes';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routers} />
  </QueryClientProvider>
);
