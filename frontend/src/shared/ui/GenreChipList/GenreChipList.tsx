import { Chip, Stack } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface GenreChipListProps {
  genres: Array<TmdbGenre>;
  renderLimit?: number | false;
  size?: 'small' | 'medium';
}

const GenreChipList = ({ genres, renderLimit = false, size = 'medium' }: GenreChipListProps) => {
  const limitToRender = renderLimit ? renderLimit : genres.length;
  return (
    <>
      {genres?.length > 0 && (
        <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
          <Stack direction="row" gap={1}>
            {genres
              ?.slice(0, limitToRender)
              ?.map((genre) => <Chip label={genre?.name} key={genre?.name} size={size} />)}
            {renderLimit && genres.length > renderLimit && (
              <Chip label={`+${genres.length - renderLimit}`} size={size} />
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default GenreChipList;
