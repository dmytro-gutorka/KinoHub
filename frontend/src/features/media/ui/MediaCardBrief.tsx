import { CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import HoverableCardWrapper from '@shared/ui/HoverableCardWrapper';

const MediaCardBrief = ({ mediaItem, mediaType }) => {
  const { poster_path: posterPath, vote_average: avgRating, title, name, id } = mediaItem;

  const imgURL: string = getPosterUrl(posterPath);
  const cardWidth = 230;
  const imgHeight = 330;

  const navTo = `${mediaType}/${id}`;

  return (
    <HoverableCardWrapper cardWidth={cardWidth} navTo={navTo}>
      <CardMedia image={imgURL} title="Card" sx={{ height: imgHeight, backgroundSize: 'cover' }} />
      <CardContent>
        <Typography variant="subtitle1" component="h3" fontWeight="700" children={title || name} />
        <Stack direction="row" gap={2} alignItems="center">
          <Rating size="small" readOnly defaultValue={avgRating / 2} precision={0.5} />
          <Typography variant="body1" children={avgRating.toFixed(2)} />
        </Stack>
      </CardContent>
    </HoverableCardWrapper>
  );
};

export default MediaCardBrief;
