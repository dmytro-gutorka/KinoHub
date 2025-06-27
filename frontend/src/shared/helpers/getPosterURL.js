import { BASE_POSTER_URL } from '../../app/constants';

export default function getPosterURL(path) {
  console.log(path);
  return `${BASE_POSTER_URL}${path}`;
}
