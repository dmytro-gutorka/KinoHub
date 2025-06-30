import { createBrowserRouter } from 'react-router';
import { QueryClient } from '@tanstack/react-query';

import Shows from '../pages/Shows';
import Layout from '../widgets/Layout';
import Movies from '../pages/Movies';
import Homepage from '../pages/Homepage';
import MediaDetailsPage from '../pages/MediaDetailsPage';
import MovieBoard from '../pages/MovieBoard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';
import History from '../pages/History';

function makeRouter() {
  return createBrowserRouter([
    {
      Component: Layout,
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/movies', Component: Movies },
        { path: '/shows', Component: Shows },
        { path: '/history', Component: History },
        { path: '/watch-board', Component: MovieBoard },
        { path: '/dashboard', Component: Dashboard },
        { path: '/profile', Component: Profile },
        { path: '/settings', Component: Settings },
        { path: '/logout', Component: Homepage },
      ],
    },
    { path: '/movies/:id', Component: MediaDetailsPage, loader: () => 'movie' },
    { path: '/shows/:id', Component: MediaDetailsPage, loader: () => 'tv' },
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
