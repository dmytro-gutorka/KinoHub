import { CircularProgress, Pagination, Stack } from '@mui/material';
import { useMediaFilters } from '../../hooks/useMediaFilters';

import useFilteredMedia from '../../hooks/useFilteredMedia';
import useSearchedMedia from '../../hooks/useSearchedMedia';
import MultipleSelect from '../MultipleSelect';
import BasicSelect from '../BasicSelect';
import SliderBar from '../SliderBar';
import MediaCardList from '../MediaCardList';
import movieGenres from '../../../data/movieGenres';
import tvShowGenres from '../../../data/tvShowGenres';


const MediaPageLayout = ({ qrKey, mediaType = 'movie' }) => {
  const mediaGenres = mediaType === 'movie' ? movieGenres : tvShowGenres

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
    qrKey, page, searchQuery, mediaType
  );

  const maxPage = searchData?.total_pages || data?.total_pages;
  const mediaData = searchData?.results.length > 0 ? searchData?.results : data?.results;

  return (
    <Stack component="section">
      <input type="search" value={searchQuery} onChange={handleSearch} />

      {searchQuery || (
        <Stack>
          <MultipleSelect mediaGenres={mediaGenres} mediaType={mediaType} genres={genres} onGenresChange={handleGenreChange} />
          <BasicSelect sortBy={sortBy} onSortChange={handleSortChange} />
          <SliderBar minRating={minRating} onRatingChange={handleRatingChange} />
        </Stack>
      )}

      {searchLoading && <CircularProgress />}
      {mediaData && <MediaCardList mediaGenres={mediaGenres} mediaData={mediaData} mediaType={mediaType}></MediaCardList>}

      <Stack spacing={2}>
        <Pagination count={500} variant="outlined" onChange={handlePageChange} />
        {/*Public API that I use has a restriction to only 500 page, so the value is hardcoded*/}
      </Stack>
    </Stack>
  );
}

export default MediaPageLayout;
