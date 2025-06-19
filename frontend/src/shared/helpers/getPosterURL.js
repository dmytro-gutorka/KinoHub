import { BASE_POSTER_URL } from '../../config/constants';

export default function getPosterURL(path) {
  return `${BASE_POSTER_URL}${path}`
}