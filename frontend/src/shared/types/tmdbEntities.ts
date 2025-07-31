import { MediaType } from '@shared/types/generalTypes';

export interface TmdbGenreList {
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

export interface TmdbSeasonBriefInfo {
  poster_path: string | null;
  air_date: string;
  name: string;
  overview: string;
  episode_count: number;
  id: number;
  season_number: number;
  vote_average: number;
}

export interface TmdbTvShowNetworks {
  logo_path: string | null;
  name: string;
  origin_country: string;
  id: number;
}

export interface TmdbPersonInfo {
  adult: boolean;
  id: number;
  gender: number;
  popularity: number;
  name: string;
  original_name: string;
  known_for_department: string;
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

export interface TmdbMediaDetails {
  adult: boolean;
  id: number;
  vote_average: number;
  popularity: number;
  vote_count: number;
  backdrop_path: string;
  homepage: string;
  original_language: string;
  overview: string;
  poster_path: string;
  status: string;
  tagline: string;
  origin_country: Array<string>;
  production_companies: Array<TmdbProductionCompanies>;
  production_countries: Array<TmdbProductionCountries>;
  spoken_languages: Array<TmdbSpokenLanguages>;
  genres: Array<TmdbGenreList>;
  credits?: {
    cast: Array<TmdbCast>;
    crew: Array<TmdbCrew>;
  };
}

export interface TmdbMovieDetails extends TmdbMediaDetails {
  belongs_to_collection: any;
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
  seasons?: Array<TmdbSeasonBriefInfo>;
}

export type TmdbMediaDetailsResponse<T extends MediaType> = T extends 'tv'
  ? TmdbTvShowDetails
  : TmdbMovieDetails;
