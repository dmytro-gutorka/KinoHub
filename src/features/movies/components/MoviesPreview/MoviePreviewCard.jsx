import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { BASE_POSTER_URL } from '../../../../config/constants';
import { Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

const StyledCardContent = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  width: '200px',
  height: '300px',
  border: `1px solid ${theme.palette.grey[900]}`,
  shadow: theme.shadows[12],
}));

const MoviePreviewCard = ({ movie }) => {
  const { vote_average: voteAverage, poster_path: posterPath, id } = movie;

  const queryClient = useQueryClient();
  const theme = useTheme();
  // const imgURL = `${BASE_POSTER_URL}${posterPath}`;
  const imgURL = '../../../../../public/dummyImage.webp';

  return (
    <StyledCard>
      <CardMedia component="img" image={imgURL} alt="Movie cover" />
      <StyledCardContent>
        <Typography>{voteAverage}</Typography>
        <Stack direction="row" gap={1}>
          <Button variant="transparent-square">+</Button>
          <Button
            component={Link}
            to={`movie/${id}?from=topRatedMovies`}
            // onMouseEnter={() => queryClient.prefetchQuery(['topRatedMovies', id])}
            sx={{
              flex: 1,
              textTransform: 'capitalize',
              background: theme.palette.common.black,
              color: theme.palette.common.white,
            }}
          >
            Watch
          </Button>
        </Stack>
      </StyledCardContent>
    </StyledCard>
  );
};

export default MoviePreviewCard;
