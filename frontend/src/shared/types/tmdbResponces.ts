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
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
}

export interface TmdbTvShowNetworks {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface TmdbPersonInfo {
  id: number;
  name: string;
  original_name: string;
  adult: boolean;
  gender: number;
  known_for_department: string;
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

export interface TmdbMediaDetail {
  homepage: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  origin_country: Array<string>;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<TmdbProductionCompanies>;
  production_countries: Array<TmdbProductionCountries>;
  spoken_languages: Array<TmdbSpokenLanguages>;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  credits?: {
    cast: Array<TmdbCast>;
    crew: Array<TmdbCrew>;
  };
}

export interface TmdbMovieDetails extends TmdbMediaDetail {
  belongs_to_collection: any;
  video: boolean;
  budget: number;
  runtime: number;
  revenue: number;
  vote_average: number;
  vote_count: number;
  imdb_id: string;
  original_title: string;
  release_date: string;
  title: string;
  genres: Array<TmdbGenreList>;
}

export interface TmdbTvShowDetails extends TmdbMediaDetail {
  in_production: boolean;
  popularity: number;
  number_of_episodes: number;
  number_of_seasons: number;
  first_air_date: string;
  last_air_date: string;
  original_name: string;
  poster_path: string;
  name: string;
  type: string;
  episode_run_time: Array<number>;
  languages: Array<string>;
  genres: Array<TmdbGenreList>;
  created_by: Array<TmdbCreatedBy>;
  networks: Array<TmdbTvShowNetworks>;
  seasons: Array<TmdbSeasonBriefInfo>;
}
