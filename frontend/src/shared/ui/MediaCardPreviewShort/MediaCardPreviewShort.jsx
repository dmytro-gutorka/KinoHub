import { Box, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import getPosterURL from '../../helpers/getPosterURL';
import StyledCard from '../StyledCard';

const MediaCardPreviewShort = ({ mediaItem }) => {
  const {
    poster_path: posterPath,
    vote_average: avgRating,
    media_type: mediaType,
    title,
    name,
    id,
  } = mediaItem;

  const imgURL = getPosterURL(posterPath);
  const isMovie = mediaType ? 'shows' : 'movies';

  return (
    <StyledCard key={id} width={230}>
      <Box component={NavLink} to={`${isMovie}/${id}`}>
        <CardMedia
          sx={{ height: 330, backgroundSize: 'cover' }}
          image={imgURL}
          title="Movie card"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="h3" fontWeight="700">
          {title || name}
        </Typography>
        <Stack direction="row" gap={2}>
          <Rating size="small" readOnly defaultValue={avgRating / 2} precision={0.5} />
          <Typography gutterBottom variant="subtitle2" component="span" fontWeight="700">
            {avgRating.toFixed(2)}
          </Typography>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default MediaCardPreviewShort;
