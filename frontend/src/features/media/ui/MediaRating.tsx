import { MediaRatingProps } from '@features/media/types/mediaTypes';
import { Rating, Typography } from '@mui/material';
import useUpdateMediaAction from '@features/media/hooks/useUpdateMediaAction';
import BlockWrapper from '@shared/ui/BlockWrapper';

const MediaRating = ({ mediaAction, mediaType }: MediaRatingProps) => {
  const { mediaId, rating } = mediaAction;
  const { mutate: updateAction } = useUpdateMediaAction(Number(mediaId), mediaType);

  return (
    <BlockWrapper blockTitle="Your rate" isBoxShadow={false}>
      <Typography variant="body1" component="h4" mb={2}>
        {!rating ? "You haven't rated it yet" : `Your current rate is ${rating} stars`}
      </Typography>

      <Rating
        sx={{ mt: 3 }}
        max={10}
        value={rating}
        onChange={(_, value: number | null) => updateAction({ rating: value })}
      />
    </BlockWrapper>
  );
};

export default MediaRating;
