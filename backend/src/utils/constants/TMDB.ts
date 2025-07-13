export const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

export const TMDB_OPTIONS = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};
