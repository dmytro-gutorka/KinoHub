import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '@app/App';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from '@app/store';
import queryClient from '@app/queryClient';
import theme from '@app/theme/theme';


createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
