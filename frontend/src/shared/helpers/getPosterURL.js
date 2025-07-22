import { BASE_POSTER_URL } from '@app/constants';

export default function getPosterURL(path) {
  return path ? `${BASE_POSTER_URL}${path}` : './public/no-image.placeholder.png';
}
