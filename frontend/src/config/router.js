import { createBrowserRouter } from 'react-router';
import { QueryClient } from '@tanstack/react-query';
import { Swiper } from 'swiper/react';

import Shows from '../pages/Shows';
import Anime from '../pages/Anime';
import Layout from '../shared/ui/Layout';
import Movies from '../pages/Movies';
import Homepage from '../pages/Homepage';
import MovieDetails from '../pages/MovieDetails';
import MediaDetailsPage from '../shared/ui/MediaDetailsPage';

function makeRouter(queryClient) {
  return createBrowserRouter([
    {
      Component: Layout,
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/anime', Component: Anime },
        { path: '/dashboard', Component: Swiper },
        { path: '/shows', Component: Shows },
        { path: '/movies', Component: Movies },
      ],
    },
    { path: '/movie/:id', Component: MediaDetailsPage },

  ]);
}

const queryClient = new QueryClient();
const router = makeRouter(queryClient);

export { queryClient, router };
