import { Box, Card, CardContent, CardMedia, Rating, Stack, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router';
import getPosterURL from '../../helpers/getPosterURL';

const MediaCardPreviewShort = ({ mediaItem }) => {
  const { poster_path: posterPath, vote_average: avgRating, media_type: mediaType, title, name, id } = mediaItem;

  const theme = useTheme();

  const imgURL = getPosterURL(posterPath);
  const isMovie = mediaType ? 'shows' : 'movies';

  return (
    <Card
      key={id}
      sx={(theme) => ({
        background: 'transparent',
        position: 'relative',
        width: 230,
        border: `1px solid ${theme.palette.transparentGrey}`,
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      })}
    >
      <Box component={NavLink} to={`${isMovie}/${id}`}>
        <CardMedia sx={{ height: 330, backgroundSize: 'cover' }} image={imgURL} title="Movie card" />
      </Box>
      <CardContent
        sx={{
          padding: theme.spacing(4),
          '&.MuiCardContent-root': {
            paddingBottom: theme.spacing(4),
          },
        }}
      >
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
    </Card>
  );
};

export default MediaCardPreviewShort;
