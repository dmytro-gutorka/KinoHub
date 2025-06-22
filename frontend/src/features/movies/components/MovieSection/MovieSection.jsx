import { Stack, Typography } from '@mui/material';
import MoviePreviewCard from '../MoviesPreview';

const MovieSection = ({ title, movieData }) => {
  return (
    <Stack component="section" justifyContent="center" alignItems="center">
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
        <Stack direction="row"flexWrap="wrap" gap={4}>
          {movieData.map((movie) => (<MoviePreviewCard movie={movie} />))}
        </Stack>
    </Stack>
  );
};

export default MovieSection;
