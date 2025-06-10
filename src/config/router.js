import { createBrowserRouter } from 'react-router';

import Layout from '../shared/ui/Layout';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';
import Anime from '../pages/Anime';
import Homepage from '../pages/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '/', Component: Homepage },
      { path: '/movies', Component: Movies },
      { path: '/shows', Component: Shows },
      { path: '/anime', Component: Anime },
    ],
  },
]);

export default router;
