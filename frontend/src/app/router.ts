import { MEDIA_TYPES } from '@app/constants';
import { createBrowserRouter } from 'react-router';

import Layout from '@widgets/Layout';
import Homepage from '@pages/Homepage';
import MediaDetailsPage from '@pages/MediaDetailsPage';
import MovieBoard from '@pages/MovieBoard';
import Profile from '@pages/Profile';
import Settings from '@pages/Settings';
import Dashboard from '@pages/Dashboard';
import History from '@pages/History';
import MediaListPage from '@pages/MediaListPage';

const router = makeRouter();

function makeRouter() {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: '',
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/movies', Component: MediaListPage, loader: () => MEDIA_TYPES.MOVIE },
        { path: '/series', Component: MediaListPage, loader: () => MEDIA_TYPES.TV_SHOW },
        { path: '/history', Component: History },
        { path: '/movie-board', Component: MovieBoard },
        { path: '/dashboard', Component: Dashboard },
        { path: '/profile', Component: Profile },
        { path: '/settings', Component: Settings },
        { path: '/logout', Component: Homepage },
      ],
    },
    { path: '/movie/:id', Component: MediaDetailsPage, loader: () => MEDIA_TYPES.MOVIE },
    { path: '/tv/:id', Component: MediaDetailsPage, loader: () => MEDIA_TYPES.TV_SHOW },
    // TODO: change :id to :mediaId
  ]);
}

export { router };
