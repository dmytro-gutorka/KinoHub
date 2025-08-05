import { MediaType } from '@shared/types/generalTypes';
import { Stack, CircularProgress, Pagination, TextField } from '@mui/material';
import { useMediaFilters } from '@features/filters/hooks/useMediaFilters';

import useFilteredMedia from '@features/filters/hooks/useFilteredMedia';
import useSearchedMedia from '@features/filters/hooks/useSearchedMedia';
import MultipleSelect from '@shared/ui/MultipleSelect';
import BasicSelect from '@shared/ui/BasicSelect';
import SliderBar from '@shared/ui/SliderBar';
import MediaCardList from '@shared/ui/MediaCardList';
import movieGenres from '@shared/data/movieGenres';
import tvShowGenres from '@shared/data/tvShowGenres';

interface MediaPageLayoutProps {
  qrKey: string;
  mediaType?: MediaType;
}

const MediaPageLayout = ({ qrKey, mediaType = 'movie' }: MediaPageLayoutProps) => {
  const mediaGenresList = mediaType === 'movie' ? movieGenres : tvShowGenres;

  const {
    filters: { page, minRating, searchQuery, genres, sortBy },
    handlers: {
      handleGenreChange,
      handleSearch,
      handleSortChange,
      handleRatingChange,
      handlePageChange,
    },
  } = useMediaFilters();

  const { data: filteredData, isLoading: filterLoading } = useFilteredMedia({
    qrKey,
    mediaType,
    minRating,
    genres,
    sortBy,
    page,
  });

  const { data: searchData, isLoading: searchLoading } = useSearchedMedia({
    mediaType,
    qrKey,
    searchQuery,
    page,
  });

  const mediaData = searchData?.results.length > 0 ? searchData?.results : filteredData?.results;

  return (
    <Stack component="section" m={10} rowGap={4}>
      <TextField label="Search" variant="outlined" onChange={handleSearch} />

      {!!searchQuery.length || (
        <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" gap={2}>
            <BasicSelect sortBy={sortBy} onSortChange={handleSortChange} />
            <MultipleSelect
              genres={genres}
              onGenresChange={handleGenreChange}
              mediaGenresList={mediaGenresList}
            />
          </Stack>
          <SliderBar minRating={minRating} onRatingChange={handleRatingChange} />
        </Stack>
      )}

      {(searchLoading || filterLoading) && <CircularProgress />}
      {mediaData && <MediaCardList mediaGenresList={mediaGenresList} mediaData={mediaData} />}

      <Stack spacing={2} justifyContent="center" alignItems="center" my={6}>
        <Pagination count={500} variant="outlined" onChange={handlePageChange} />
        // TODO : Get rid of hardcoded 500
      </Stack>
    </Stack>
  );
};

export default MediaPageLayout;
