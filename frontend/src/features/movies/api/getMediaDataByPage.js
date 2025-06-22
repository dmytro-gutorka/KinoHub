import { TMDB_URL, TMDB_OPTIONS } from '../../../app/constants';

async function getMediaDataByPage(page = 1, minRating, genres, sortBy, mediaType) {
  const concatGenres = genres.map((movie) => movie.id).join('%20%7C%20');
  const URL = `${TMDB_URL}/3/discover/${mediaType}?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=${sortBy}&vote_average.gte=${minRating}${concatGenres ? `&with_genres=${concatGenres}` : ''}`;

  const res = await fetch(URL, TMDB_OPTIONS);

  return await res.json();
}

export default getMediaDataByPage;
