import { Button, Card, CardContent, CardMedia, Stack, styled, Typography } from '@mui/material';
import { BASE_POSTER_URL } from '../../../../config/constants';
import { Link } from 'react-router';

import SquareTransparentButton from '../../../../shared/ui/SquareTransparentButton';
import { useQueryClient } from '@tanstack/react-query';

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
}));

const MoviePreviewCard = ({ movie }) => {
  const { vote_average: voteAverage, poster_path: posterPath, id } = movie;

  const queryClient = useQueryClient();

  // const imgURL = `${BASE_POSTER_URL}${posterPath}`;
  const imgURL = '../../../../../public/dummyImage.webp';

  return (
    <Link
      to={`movie/${id}?from=topRatedMovies`}
      // onMouseEnter={() => queryClient.prefetchQuery(['topRatedMovies', id])}
    >
      <Card sx={{ position: 'relative', width: '200px', height: '300px' }}>
        <CardMedia component="img" image={imgURL} alt="Movie cover" />
        <StyledCardContent>
          <Typography>{voteAverage}</Typography>
          <Stack direction="row" gap={1}>
            <SquareTransparentButton>+</SquareTransparentButton>
            <Button
              sx={{
                flex: 1,
                textTransform: 'capitalize',
                background: (theme) => theme.palette.customColors.accent,
                color: (theme) => theme.palette.customColors.dark,
              }}
            >
              Watch
            </Button>
          </Stack>
        </StyledCardContent>
      </Card>
    </Link>
  );
};

export default MoviePreviewCard;
