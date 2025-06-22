import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient, router } from './router';
import { store } from './store';


import finalTheme from './theme';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient} >
          <ThemeProvider theme={finalTheme}>
            <CssBaseline />
            <RouterProvider router={router} />
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  );
}
