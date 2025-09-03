import { MediaType } from '@shared/types/generalTypes';
import { CircularProgress, Stack, TextField } from '@mui/material';
import { useMediaFilters } from '@features/filters/hooks/useMediaFilters';
import { useLoaderData } from 'react-router';
import useExtractedFilteredSearchedData from '@features/media/model/hooks/useExtractedFilteredSearchedData';
import MediaPagePagination from '@features/media/ui/MediaPagePagination';
import MediaFilters from '@features/media/ui/MediaFilters';
import MediaCardList from '@features/media/ui/MediaCardList';
import movieGenres from '@shared/data/movieGenres';
import tvShowGenres from '@shared/data/tvShowGenres';
import PageWrapper from '@shared/ui/PageWrapper';

const MediaList = () => {
  const mediaType: MediaType = useLoaderData();
  const genresList = mediaType === 'movie' ? movieGenres : tvShowGenres;

  const { filters, handlers } = useMediaFilters();
  const { mediaList, pages, isLoading } = useExtractedFilteredSearchedData(filters, mediaType);
  const { handleSearch, handlePageChange } = handlers;

  return (
    <PageWrapper>
      {isLoading && <CircularProgress />}
      <Stack mb={10} gap={5}>
        <TextField label="Search" variant="outlined" onChange={handleSearch} />
        <MediaFilters handlers={handlers} filters={filters} genresList={genresList} />
      </Stack>
      <MediaCardList tmdbGenreList={genresList} mediaList={mediaList} mediaType={mediaType} />
      <MediaPagePagination pages={pages} handlePageChange={handlePageChange} />
    </PageWrapper>
  );
};

export default MediaList;
