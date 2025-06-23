export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780';
export const TMDB_URL = 'https://api.themoviedb.org/3/';


export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjVhODFiMjExZWQ1MmFjMTdhYmJhYWIyY2VjZDM5YSIsIm5iZiI6MTczMzQ3NTU0OC45NzYsInN1YiI6IjY3NTJiY2RjODBlNWI4ZjBhNzU2MzEzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zX82V-5f3weDqX-4sTp4rvxY2YPyT7Z_AHdTLYYI2mI',
  },
};

export const TMDB_ENDPOINTS = {
  TRENDING_MOVIES: 'trending/movie/week',
  TRENDING_TV: 'trending/tv/week',
  TV_AIRING_TODAY: 'tv/airing_today',
  MOVIE_TOP_RATED: 'movie/top_rated',
};

export const MEDIA_ACTIONS = {
  isWatched: "is-watched",
  isLiked: "like",
  rating: "rating"
}

export const LOCAL_URL = 'http://localhost:8080/'
export const USER_ID = 1
// hardcode user id just for the sake of developing, will be changed in the future