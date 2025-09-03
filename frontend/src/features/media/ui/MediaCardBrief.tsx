import { CardContent, Rating, Stack, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import MediaCardHoverableWrapper from '@features/media/ui/MediaCardHoverableWrapper';

const MediaCardBrief = ({ mediaItem, mediaType }) => {
  const { poster_path: posterPath, vote_average: avgRating, title, name, id } = mediaItem;

  const imgURL: string = getPosterUrl(posterPath);
  const navTo = `${mediaType}/${id}`;

  return (
    <MediaCardHoverableWrapper width={230} height={330} navTo={navTo} imgURL={imgURL}>
      <CardContent>
        <Typography variant="subtitle1" component="h3" fontWeight="700" children={title || name}/>
        <Stack direction="row" gap={2} alignItems="center">
          <Rating size="small" readOnly defaultValue={avgRating / 2} precision={0.5} />
          <Typography variant="body1" children={avgRating.toFixed(2)} />
        </Stack>
      </CardContent>
    </MediaCardHoverableWrapper>
  );
};

export default MediaCardBrief;
