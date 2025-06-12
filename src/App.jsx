import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import { Swiper } from 'swiper/react';

import MovieDetails from './pages/MovieDetails';
import Homepage from './pages/Homepage';
import Layout from './shared/ui/Layout';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Anime from './pages/Anime';

const theme = createTheme({
  palette: {
    mode: 'dark',
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
    primary: {
      main: '#00B9AE',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        aside: {
          background: '#1c1b1b',
        },
        ul: {
          padding: '0px',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 0.4,
          borderColor: 'red',
          height: 2,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  props: {
    MuiTable: {
      size: 'small',
    },
  },
});

function makeRouter() {
  return createBrowserRouter([
    {
      Component: Layout,
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/shows', Component: Shows },
        { path: '/anime', Component: Anime },
        { path: '/dashboard', Component: Swiper },
        { path: '/movies', Component: Movies },
        { path: '/movie/:id', Component: MovieDetails },
      ],
    },
  ]);
}

const queryClient = new QueryClient();
const router = makeRouter(queryClient);

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
