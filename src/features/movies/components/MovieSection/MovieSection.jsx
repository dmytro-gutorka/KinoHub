import { Stack, Typography } from '@mui/material';
import MovieSlider from '../../../../shared/ui/MovieSlider';

const MovieSection = ({ title, movieData }) => {
  return (
    <Stack component="section">
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      <MovieSlider movieData={movieData} />
    </Stack>
  );
};

export default MovieSection;
