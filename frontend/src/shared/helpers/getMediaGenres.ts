import { TmdbGenre } from '@entities/types/tmdbEntities';

export function getMediaGenres(genresId: number[], genresList: TmdbGenre[]) {
  if (!genresId || !genresList) return [];

  return genresList?.filter(tmdbGenreItem => genresId.includes(tmdbGenreItem.id))
}