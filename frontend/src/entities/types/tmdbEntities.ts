import { MediaType } from '@shared/types/generalTypes';

export interface TmdbGenre {
  id: number;
  name: string;
}

export interface TmdbProductionCompanies {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TmdbProductionCountries {
  iso_3166_1: string;
  name: string;
}

export interface TmdbSpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TmdbCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

export interface TmdbSeasonInfo {
  poster_path: string | null;
  episode_count: number;
  air_date: string;
  name: string;
  overview: string;
  id: number;
  season_number: number;
  vote_average: number;
}

export interface TmdbEpisodeInfo {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number | null;
  season_number: number;
  show_id: number;
  vote_average: number;
  still_path: string;
  vote_count: number;
  crew: Array<TmdbCrew>;
  guest_stars: Array<never>;
}

export interface TmdbTvShowNetworks {
  logo_path: string | null;
  name: string;
  origin_country: string;
  id: number;
}

export interface TmdbPersonInfo {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface TmdbCast extends TmdbPersonInfo {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface TmdbCrew extends TmdbPersonInfo {
  credit_id: string;
  department: string;
  job: string;
}

export interface TmdbVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  published_at: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  id: string;
}

export interface TmdbVideosResponse {
  id: number;
  results: TmdbVideo[];
}

export interface TmdbMediaDetails {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  homepage: string;
  status: string;
  tagline: string;
  origin_country: Array<string>;
  production_companies: Array<TmdbProductionCompanies>;
  production_countries: Array<TmdbProductionCountries>;
  spoken_languages: Array<TmdbSpokenLanguages>;
  genres: Array<TmdbGenre>;
  videos: TmdbVideosResponse;
  credits: {
    cast: Array<TmdbCast>;
    crew: Array<TmdbCrew>;
  };
}

export interface TmdbMovieDetails extends TmdbMediaDetails {
  belongs_to_collection: never;
  video: boolean;
  budget: number;
  runtime: number;
  revenue: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  title: string;
}

export interface TmdbTvShowDetails extends TmdbMediaDetails {
  in_production: boolean;
  popularity: number;
  number_of_episodes: number;
  number_of_seasons: number;
  first_air_date: string;
  last_air_date: string;
  original_name: string;
  name: string;
  type: string;
  episode_run_time: Array<number>;
  languages: Array<string>;
  created_by: Array<TmdbCreatedBy>;
  networks: Array<TmdbTvShowNetworks>;
  seasons?: Array<TmdbSeasonInfo>;
}

export interface TmdbTrendingMediaDetails {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface TmdbTrendingTvShowDetails extends TmdbTrendingMediaDetails {
  name: string;
  first_air_date: string;
  original_name: string;
  origin_country: Array<string>;
}

export interface TmdbTrendingMovieDetails extends TmdbTrendingMediaDetails {
  title: string;
  release_date: string;
  original_title: string;
  video: boolean;
}

export interface TmdbMediaListResults<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T;
}

export interface TmdbMediaSearchedFilteredList {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TmdbMovieSearchedFilteredList extends TmdbMediaSearchedFilteredList {
  original_title: string;
  release_date: string;
  title: string;
  video: boolean;
}

export interface TmdbTvShowSearchedFilteredList extends TmdbMediaSearchedFilteredList {
  origin_country: Array<string>;
  original_name: string;
  first_air_date: string;
  name: string;
}

export type TmdbMediaSearchedFilteredResponse<T extends MediaType> = T extends 'tv'
  ? TmdbTvShowSearchedFilteredList
  : TmdbMovieSearchedFilteredList;

export type TmdbMediaDetailsResponse<T extends MediaType> = T extends 'tv'
  ? TmdbTvShowDetails
  : TmdbMovieDetails;
