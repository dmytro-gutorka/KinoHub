import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient, router } from './config/router';

import finalTheme from './config/theme';

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={finalTheme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
