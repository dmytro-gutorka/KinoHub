export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780';
export const TMDB_URL = 'https://api.themoviedb.org';

export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjVhODFiMjExZWQ1MmFjMTdhYmJhYWIyY2VjZDM5YSIsIm5iZiI6MTczMzQ3NTU0OC45NzYsInN1YiI6IjY3NTJiY2RjODBlNWI4ZjBhNzU2MzEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zX82V-5f3weDqX-4sTp4rvxY2YPyT7Z_AHdTLYYI2mI',
  },
};

export const QUERY_KEYS = {
  movies: {
    nowPlayingMovies: 'nowPlayingMovies',
    upcomingMovies: 'upcomingMovies',
    topRatedMovies: 'topRatedMovies',
    popularMovies: 'popularMovies',
  },
};
