import { BASE_POSTER_URL } from '../../app/constants';

export default function getPosterURL(path) {
  return `${BASE_POSTER_URL}${path}`;
}
