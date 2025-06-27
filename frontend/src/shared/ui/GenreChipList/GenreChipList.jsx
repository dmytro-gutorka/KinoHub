import { Chip, Stack } from '@mui/material';

const GenreChipList = ({ genres, renderLimit = false, size = 'medium' }) => {
  return (
    <Stack direction="row" gap={1}>
      {genres?.slice(0, !renderLimit ? genres.length : renderLimit)?.map((genre) => (
        <Chip label={genre?.name} key={genre?.name} size={size} />
      ))}
      {renderLimit && genres.length > renderLimit && (
        <Chip label={genres.length - renderLimit} size={size} />
      )}
    </Stack>
  );
};

export default GenreChipList;
