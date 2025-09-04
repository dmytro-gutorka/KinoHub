import { MediaType } from '@shared/types/generalTypes';
import { TmdbGenre } from '@entities/types/tmdbEntities';
import { Pagination, Stack, TextField } from '@mui/material';
import { useMediaFilters } from '@features/filters/hooks/useMediaFilters';
import { useLoaderData } from 'react-router';
import useExtractedFilteredSearchedData from '@features/media/model/hooks/useExtractedFilteredSearchedData';
import MediaFilters from '@features/media/ui/MediaFilters';
import MediaCardList from '@features/media/ui/MediaCardList';
import PageWrapper from '@shared/ui/PageWrapper';
import movieGenres from '@shared/data/movieGenres';
import tvShowGenres from '@shared/data/tvShowGenres';

const MediaList = () => {
  const mediaType: MediaType = useLoaderData();
  const tmdbGenreList: TmdbGenre[] = mediaType === 'movie' ? movieGenres : tvShowGenres;

  const { filters, handlers } = useMediaFilters();
  const { mediaList, pages } = useExtractedFilteredSearchedData(filters, mediaType);
  const { handleSearch, handlePageChange } = handlers;

  return (
    <PageWrapper>
      <Stack mb={10} gap={5}>
        <TextField label="Search" variant="outlined" onChange={handleSearch} />
        <MediaFilters
          mediaType={mediaType}
          handlers={handlers}
          filters={filters}
          tmdbGenreList={tmdbGenreList}
        />
      </Stack>
      <MediaCardList
        tmdbGenreList={tmdbGenreList}
        mediaList={mediaList}
        mediaType={mediaType}
      />
      <Pagination
        count={pages}
        onChange={handlePageChange}
        sx={{ marginBlock: 15, placeSelf: 'center'}}
      />
    </PageWrapper>
  );
};

export default MediaList;
