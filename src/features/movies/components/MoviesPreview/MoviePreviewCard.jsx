import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780/';

const MoviePreviewCard = ({ movie }) => {
  return (
    <Card sx={{ position: 'relative', width: '200px' }}>
      <CardMedia
        component="img"
        height="300"
        image={`${BASE_POSTER_URL}${movie.poster_path}`}
        alt="Movie cover"
      />

      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h5">{movie.title}</Typography>
        <Typography>{movie.vote_average}</Typography>
      </CardContent>
    </Card>
  );
};

export default MoviePreviewCard;
