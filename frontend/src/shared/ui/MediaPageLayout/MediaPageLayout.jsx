import { CircularProgress, Pagination, Stack, TextField } from '@mui/material';
import { useMediaFilters } from '../../hooks/useMediaFilters';

import useFilteredMedia from '../../hooks/useFilteredMedia';
import useSearchedMedia from '../../hooks/useSearchedMedia';
import MultipleSelect from '../MultipleSelect';
import BasicSelect from '../BasicSelect';
import SliderBar from '../SliderBar';
import MediaCardList from '../MediaCardList';
import movieGenres from '../../data/movieGenres';
import tvShowGenres from '../../data/tvShowGenres';

const MediaPageLayout = ({ qrKey, mediaType = 'movie' }) => {
  const mediaGenres = mediaType === 'movie' ? movieGenres : tvShowGenres;

  const {
    filters: { page, minRating, searchQuery, genres, sortBy, isFiltersOpen },
    handlers: {
      handleGenreChange,
      handleSearch,
      handleSortChange,
      handleRatingChange,
      handlePageChange,
    },
  } = useMediaFilters();

  const { data } = useFilteredMedia(qrKey, page, minRating, genres, sortBy, mediaType);
  const { data: searchData, isLoading: searchLoading } = useSearchedMedia(
    qrKey,
    page,
    searchQuery,
    mediaType
  );

  const mediaData = searchData?.results.length > 0 ? searchData?.results : data?.results;

  return (
    <Stack component="section" m={10} rowGap={4}>
      <TextField label="Search" variant="outlined" onChange={handleSearch} />

      {!!searchQuery.length || (
        <Stack gap={2} direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" gap={2}>
            <BasicSelect sortBy={sortBy} onSortChange={handleSortChange} />
            <MultipleSelect
              mediaGenres={mediaGenres}
              mediaType={mediaType}
              genres={genres}
              onGenresChange={handleGenreChange}
            />
          </Stack>
          <SliderBar minRating={minRating} onRatingChange={handleRatingChange} />
        </Stack>
      )}

      {searchLoading && <CircularProgress />}
      {mediaData && <MediaCardList mediaGenres={mediaGenres} mediaData={mediaData} />}

      <Stack spacing={2} justifyContent="center" alignItems="center" my={6}>
        <Pagination count={500} variant="outlined" onChange={handlePageChange} />
        {/*Public API that I use has a restriction to only 500 page, so the value is hardcoded*/}
      </Stack>
    </Stack>
  );
};

export default MediaPageLayout;
