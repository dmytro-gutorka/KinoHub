import { RouterProvider } from 'react-router';
import { createTheme, ThemeProvider } from '@mui/material';

import router from './config/router';

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

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
