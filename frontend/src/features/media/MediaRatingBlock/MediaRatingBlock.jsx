import { Box, Rating, Typography, useTheme } from '@mui/material';
import useMediaAction from '@widgets/MediaHeader/hooks/useMediaAction';

const MediaRatingBlock = ({ mediaAction, mediaType }) => {
  const { mediaId, rating } = mediaAction;

  const { mutate: updateAction } = useMediaAction(String(mediaId), mediaType);

  const theme = useTheme();

  const handleRating = (e) => updateAction({ rating: e.target.value });

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customComponents.border}>
      {!rating && (
        <>
          <Typography variant="h5" component="h3" mb={1}>
            Rate the movie
          </Typography>
          <Typography variant="subtitle2" component="h4" mb={2} sx={{ color: 'grey' }}>
            You haven't rated it yet
          </Typography>
        </>
      )}

      {rating && (
        <>
          <Typography variant="h5" component="h3" mb={1}>
            Want to change your rate ?
          </Typography>
          <Typography variant="subtitle2" component="h4" mb={2} sx={{ color: 'grey' }}>
            Your current rate is {rating} stars
          </Typography>
        </>
      )}

      <Rating max={10} value={rating} onChange={handleRating} />
    </Box>
  );
};

export default MediaRatingBlock;
