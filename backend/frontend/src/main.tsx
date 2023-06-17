import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routes';
import { queryClient } from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={routers} />
  </QueryClientProvider>
);
