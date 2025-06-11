import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780/';

const MoviePreviewCard = ({ movie }) => {
  return (
    <Card sx={{ position: 'relative', width: '200px', height: '300px' }}>
      <CardMedia
        component="img"
        image={`${BASE_POSTER_URL}${movie.poster_path}`}
        alt="Movie cover"
      />

      <CardContent
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
        }}
      >
        <Typography>{movie.vote_average}</Typography>
        <Stack>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(100, 100, 100, .5)',
              width: '50px',
              height: '50px',
              color: 'black',
            }}
          >
            +
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MoviePreviewCard;
