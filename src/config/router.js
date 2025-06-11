import { createBrowserRouter } from 'react-router';

import Layout from '../shared/ui/Layout';
import Movies from '../pages/Movies';
import Shows from '../pages/Shows';
import Anime from '../pages/Anime';
import Homepage from '../pages/Homepage';
import Swiper from '../shared/ui/MovieSlider';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '/', Component: Homepage },
      { path: '/movies', Component: Movies },
      { path: '/shows', Component: Shows },
      { path: '/anime', Component: Anime },
      { path: '/dashboard', Component: Swiper },
    ],
  },
]);

export default router;

//
//
// сделать комбинированный подход
//
//
// {
//   path: "/movies/:id",
//     element: <MoviePage />,
//   loader: ({ params }) =>
//   queryClient.getQueryData(['movie', params.id]) || // 1. Пробуем взять данные из кеша
//   queryClient.fetchQuery(['movie', params.id], fetchMovie), // 2. Если нет в кеше — загружаем
// }
