import { RouterProvider } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';

import router from './config/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const darkTheme = createTheme({
  palette: {
    customColors: {
      dark: '#16181E',
      grey: '#21242D',
      accent: '#00B9AE',
      light: '#ffffff',
    },
  },
});

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
