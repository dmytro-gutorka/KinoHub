import { MediaFiltersBase } from '@shared/types/generalTypes';
import { TmdbGenre } from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import BasicSelect from '@shared/ui/BasicSelect';
import MultipleSelect from '@shared/ui/MultipleSelect';
import SliderBar from '@shared/ui/SliderBar';

interface MediaFiltersProps {
  handlers: any;
  filters: MediaFiltersBase & { searchQuery: string };
  genresList: Array<TmdbGenre>;
}

export default function MediaFilters({ handlers, filters, genresList }: MediaFiltersProps) {
  const { minRating, searchQuery, genres, sortBy } = filters;
  const { handleGenreChange, handleSortChange, handleRatingChange } = handlers;

  return (
    <>
      {!!searchQuery.length || (
        <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" gap={2}>
            <BasicSelect sortBy={sortBy} onSortChange={handleSortChange} />
            <MultipleSelect
              genres={genres}
              onGenresChange={handleGenreChange}
              genresList={genresList}
            />
          </Stack>
          <SliderBar minRating={minRating} onRatingChange={handleRatingChange} />
        </Stack>
      )}
    </>
  );
}
