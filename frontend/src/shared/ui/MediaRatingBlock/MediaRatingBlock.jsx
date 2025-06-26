import { Box, Rating, Typography, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import getMediaRating from '../../api/getMediaRating';
import { useEffect, useState } from 'react';

const MediaRatingBlock = ({ actionMutation, extraMediaData, mediaId }) => {
  const [rating, setRating] = useState(0);
  const theme = useTheme();

  const { data: mediaRating, isSuccess } = useQuery({
    queryKey: ['mediaActionData', mediaId],
    queryFn: () => getMediaRating(mediaId),
    staleTime: 0,
  });

  function handleRating(_event, newRating) {
    if (newRating !== null) {
      setRating(newRating);
      actionMutation.mutate({ rating: newRating, ...extraMediaData });
    }
  }

  useEffect(() => {
    if (mediaRating?.rating != null) {
      setRating(mediaRating.rating);
    }
  }, [mediaRating?.rating]);

  if (!isSuccess) return <div>Loading...</div>;

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customComponents.border}>
      {!mediaRating?.rating && (
        <>
          <Typography variant="h5" component="h3" mb={1}>
            Rate the movie
          </Typography>
          <Typography variant="subtitle2" component="h4" mb={2} sx={{ color: 'grey' }}>
            You haven't rated it yet
          </Typography>
        </>
      )}

      {mediaRating?.rating && (
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
