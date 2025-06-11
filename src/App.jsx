import { RouterProvider } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import router from './config/router';

const theme = createTheme({
  palette: {
    customColors: {
      dark: 'rgba(22,24,30, 1)',
      grey: 'rgba(33,36,45, 1)',
      accent: 'rgba(0,185,174, 1)',
      light: 'rgba(255,255,255, 1)',
      darkTransparent: 'rgba(22,24,30, 0.2)',
      greyTransparent: 'rgba(33,36,45, 0.2)',
      accentTransparent: 'rgba(0,185,174, 0.2)',
      lightTransparent: 'rgba(255,255,255, 0.1)',
    },
  },
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
