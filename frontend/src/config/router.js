import { createBrowserRouter } from 'react-router';
import { QueryClient } from '@tanstack/react-query';
import { Swiper } from 'swiper/react';

import Shows from '../pages/Shows';
import Layout from '../shared/ui/Layout';
import Movies from '../pages/Movies';
import Homepage from '../pages/Homepage';
import MediaDetailsPage from '../shared/ui/MediaDetailsPage';

function makeRouter(queryClient) {
  return createBrowserRouter([
    {
      Component: Layout,
      path: '/',
      children: [
        { path: '/', Component: Homepage },
        { path: '/dashboard', Component: Swiper },
        { path: '/shows', Component: Shows },
        { path: '/movies', Component: Movies },
      ],
    },
    { path: '/movies/:id', Component: MediaDetailsPage, loader: () => 'movie' },
    { path: '/shows/:id', Component: MediaDetailsPage,  loader: () => 'tv' },
  ]);
}

const queryClient = new QueryClient();
const router = makeRouter(queryClient);

export { queryClient, router };
