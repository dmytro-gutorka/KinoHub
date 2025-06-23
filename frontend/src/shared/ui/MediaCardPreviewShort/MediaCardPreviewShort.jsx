import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { NavLink} from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import getPosterURL from '../../helpers/getPosterURL';
import getMovieDetails from '../../../features/movies/api/getMovieDetails';

const MediaCardPreviewShort = ({ mediaItem }) => {

  const {
      poster_path: posterPath,
      vote_average: avgRating,
      media_type: mediaType,
      title,
      id,
  } = mediaItem;

    const isMovie = mediaType ? 'shows' : 'movies'

  console.log(mediaItem)

  const imgURL = getPosterURL(posterPath)
  const queryClient = useQueryClient();

  const prefetch = () => {
    queryClient.prefetchQuery({
      queryKey: ['movie', id],
      queryFn: () => getMovieDetails(id),
    });
  };

  return (
      <Card
          key={id}
          sx={(theme) => ({
              background: theme.palette.gradientMidnightSpace,
              position: 'relative',
              width: 230,
              border: `1px solid ${theme.palette.transparentGrey}`,
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' },
          })}
      >
          <Box component={NavLink} to={`${isMovie}/${id}`}>
              <CardMedia
                  sx={{ height: 330, backgroundSize: 'cover',}}
                  image={imgURL}
                  title="Movie card"
              />
          </Box>
          <CardContent>
              <Typography gutterBottom variant="subtitle1" component="h3" fontWeight="700">
                  {title}
              </Typography>
              <Stack direction="row" gap={2}>
              <Rating size="small" readOnly defaultValue={avgRating / 2} precision={0.5} />
                  <Typography gutterBottom variant="subtitle2" component="span" fontWeight="700">
                      {avgRating.toFixed(2)}
                  </Typography>
              </Stack>
          </CardContent>
      </Card>
  );
};

export default MediaCardPreviewShort;
