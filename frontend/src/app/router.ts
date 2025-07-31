import { QueryClient } from '@tanstack/react-query';
import { createBrowserRouter } from 'react-router';

import TvShow from '@pages/TvShow';
import Layout from '@widgets/Layout';
import Movies from '@pages/Movies';
import Homepage from '@pages/Homepage';
import MediaDetailsPage from '@pages/MediaDetailsPage';
import MovieBoard from '@pages/MovieBoard';
import Profile from '@pages/Profile';
import Settings from '@pages/Settings';
import Dashboard from '@pages/Dashboard';
import History from '@pages/History';

function makeRouter(queryClient: QueryClient) {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: '',
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/movies', Component: Movies },
        { path: '/tv-show', Component: TvShow },
        { path: '/history', Component: History },
        { path: '/movie-board', Component: MovieBoard },
        { path: '/dashboard', Component: Dashboard },
        { path: '/profile', Component: Profile },
        { path: '/settings', Component: Settings },
        { path: '/logout', Component: Homepage },
      ],
    },
    { path: '/movies/:id', Component: MediaDetailsPage, loader: () => 'movie' },
    { path: '/tv-show/:id', Component: MediaDetailsPage, loader: () => 'tv' },
  ]);
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const router = makeRouter(queryClient);

export { queryClient, router };
