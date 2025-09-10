import { MediaRatingProps } from '@features/media/model/types/mediaTypes';
import { Rating, Typography } from '@mui/material';
import useUpdateMediaAction from '@features/media/model/hooks/useUpdateMediaAction';
import BlockWrapper from '@shared/ui/BlockWrapper';

const MediaRating = ({ mediaAction, mediaType }: MediaRatingProps) => {
  const { mediaId, rating } = mediaAction;
  const { mutate: updateAction } = useUpdateMediaAction(Number(mediaId), mediaType);

  //TODO: value: any
  const handleRating = (_: any, value: any) => {
    updateAction({ rating: value });
  };

  return (
    <BlockWrapper blockTitle="Your rate" isBoxShadow={false}>
      {!rating && (
        <>
          <Typography variant="subtitle2" component="h4" mb={2} sx={{ color: 'grey' }}>
            You haven't rated it yet
          </Typography>
        </>
      )}

      {rating && (
        <>
          <Typography variant="subtitle2" component="h4" mb={2} sx={{ color: 'grey' }}>
            Your current rate is {rating} stars
          </Typography>
        </>
      )}

      <Rating max={10} value={rating} onChange={handleRating} />
    </BlockWrapper>
  );
};

export default MediaRating;
