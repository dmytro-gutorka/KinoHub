import { MediaFiltersBase, MediaType } from '@shared/types/generalTypes';
import { TmdbGenre } from '@entities/types/tmdbEntities';
import { Button, Stack } from '@mui/material';
import BasicSelect from '@shared/ui/BasicSelect';
import MultipleSelect from '@shared/ui/MultipleSelect';
import {
  RatingsSelectValues,
  SortByMovieSelectValues,
  SortByTvSelectValues,
} from '@features/media/model/data/inputSelectValues';


interface MediaFiltersProps {
  handlers: any;
  filters: MediaFiltersBase & { searchQuery: string };
  tmdbGenreList: Array<TmdbGenre>;
  mediaType: MediaType
}

export default function MediaFilters({ handlers, filters, tmdbGenreList, mediaType }: MediaFiltersProps) {
  const { minRating, searchQuery, genres, sortBy } = filters;
  const { handleGenreChange, handleSortChange, handleRatingChange, handleResetFilters } = handlers;

  // TMDB search does not work coupled with filters, so I have to hide it
  // after a user has entered any character in the search bar

  if (!searchQuery.length)
    return (
      <Stack gap={4} direction="row" alignItems="center" justifyContent="start" flexWrap="wrap">
        <MultipleSelect
          staticValueList={tmdbGenreList}
          selectedValueList={genres}
          onChange={handleGenreChange} />
        <BasicSelect
          staticValueList={mediaType === 'movie' ? SortByMovieSelectValues : SortByTvSelectValues}
          value={sortBy}
          onChange={handleSortChange}
          label='Sort by' />
        <BasicSelect
          staticValueList={RatingsSelectValues}
          value={minRating}
          onChange={handleRatingChange}
          label='Min Rating'/>
        <Button onClick={() => handleResetFilters()}></Button>
      </Stack>
    )
}
