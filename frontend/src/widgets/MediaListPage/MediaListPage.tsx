import { MediaType } from '@shared/types/generalTypes';
import { Stack, CircularProgress, TextField } from '@mui/material';
import { useMediaFilters } from '@features/filters/hooks/useMediaFilters';
import { useLoaderData } from 'react-router';
import useExtractedFilteredSearchedData from '@features/media/model/hooks/useExtractedFilteredSearchedData';
import MediaPagePagination from '@features/media/ui/MediaPagePagination';
import MediaCardList from '@shared/ui/MediaCardList';
import MediaFilters from '@features/media/ui/MediaFilters';
import movieGenres from '@shared/data/movieGenres';
import tvShowGenres from '@shared/data/tvShowGenres';

const MediaListPage = () => {
  const mediaType: MediaType = useLoaderData();
  const genresList = mediaType === 'movie' ? movieGenres : tvShowGenres;

  const { filters, handlers } = useMediaFilters();
  const { mediaList, pages, isLoading } = useExtractedFilteredSearchedData(filters, mediaType);
  const { handleSearch, handlePageChange } = handlers;

  return (
    <Stack component="section" m={10} rowGap={4}>
      {isLoading && <CircularProgress />}

      <TextField label="Search" variant="outlined" onChange={handleSearch} />
      <MediaFilters handlers={handlers} filters={filters} genresList={genresList} />
      <MediaCardList genresList={genresList} mediaList={mediaList} />
      <MediaPagePagination pages={pages} handlePageChange={handlePageChange} />
    </Stack>
  );
};

export default MediaListPage;
