import { Chip, Stack } from '@mui/material';

const GenreChipList = ({ genres, renderLimit = false, size = 'medium' }) => {
  const limitToRender = !renderLimit ? genres.length : renderLimit;
  return (
    <>
      {genres?.length > 0 && (
        <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
          <Stack direction="row" gap={1}>
            {genres?.slice(0, limitToRender)?.map((genre) => (
              <Chip label={genre?.name} key={genre?.name} size={size} />
            ))}
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
