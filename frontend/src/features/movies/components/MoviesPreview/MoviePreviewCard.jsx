import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBookmark } from '../../../../entities/user/model/slice';

import getMovieDetails from '../../api/getMovieDetails';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import getPosterURL from '../../../../shared/helpers/getPosterURL';

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

  const imgURL = getPosterURL(posterPath)
  const queryClient = useQueryClient();
  const theme = useTheme();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.user.bookmarks);

  const isBookmarked = bookmarks.some((movieId) => movieId === id);

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ['movie', id],
      queryFn: () => getMovieDetails(id),
    });
  };

  return (
    <StyledCard>
      <CardMedia component="img" image={imgURL} alt="Movie cover" />
      <StyledCardContent>
        <Typography>{voteAverage}</Typography>
        <Stack direction="row" gap={1}>
          <IconButton onClick={() => dispatch(toggleBookmark(id))}>
            {isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <Button
            color="buttonColor.light"
            component={Link}
            to={`movies/${id}`}
            onMouseEnter={prefetch}
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
