import { Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w780';

const MoviePreviewCard = ({ movie }) => {
  console.log(`${BASE_POSTER_URL}${movie.poster_path}`);
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
          // выносить стили вне компонента по переменным а внутри компопнента уже по условиям
          примеять стиди
          <Button
            variant="contained"
            size="size"
            sx={{
              backgroundColor: 'rgba(240, 23, 241, 0.2)',
              maxWidth: '30px',
              maxHeight: '30px',
              minWidth: '30px',
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
