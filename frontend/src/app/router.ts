import { MEDIA_TYPES } from '@app/constants';
import { createBrowserRouter } from 'react-router';

import Layout from '@widgets/Layout';
import Homepage from '@pages/Homepage';
import MediaDetails from '@pages/MediaDetails';
import MovieBoard from '@pages/MovieBoard';
import Profile from '@pages/Profile';
import History from '@pages/History';
import MediaList from '@pages/MediaList';
import People from '@pages/People';
import Friends from '@pages/Friends';
import DashboardMovies from '@pages/DashboardMovies';
import DashboardTvShows from '@pages/DashboardTvShows';
import DashboardOverview from '@pages/DashboardOverview';

const router = makeRouter();

function makeRouter() {
  return createBrowserRouter([
    {
      Component: Layout,
      errorElement: '',
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/movies', Component: MediaList, loader: () => MEDIA_TYPES.MOVIE },
        { path: '/series', Component: MediaList, loader: () => MEDIA_TYPES.TV_SHOW },
        { path: '/history', Component: History },
        { path: '/movie-board', Component: MovieBoard },
        { path: '/dashboard/overview', Component: DashboardOverview },
        { path: '/dashboard/movies', Component: DashboardMovies },
        { path: '/dashboard/tv', Component: DashboardTvShows },
        { path: '/logout', Component: Homepage },
        { path: '/people', Component: People },
        { path: '/friends', Component: Friends },
        { path: '/profile', Component: Profile },
      ],
    },
    { path: '/movie/:id', Component: MediaDetails, loader: () => MEDIA_TYPES.MOVIE },
    { path: '/tv/:id', Component: MediaDetails, loader: () => MEDIA_TYPES.TV_SHOW },
    // TODO: change :id to :mediaId
  ]);
}

export { router };
