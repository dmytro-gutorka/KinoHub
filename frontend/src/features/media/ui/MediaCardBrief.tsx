import { CardContent, Rating, Stack, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import StyledMediaCardBrief from '@features/media/ui/MediaCardHoverableWrapper';

const MediaCardBrief = ({ mediaItem, mediaType }) => {
  const { poster_path: posterPath, vote_average: avgRating, title, name, id } = mediaItem;

  const imgURL: string = getPosterUrl(posterPath);
  const navTo = `${mediaType}/${id}`;

  return (
    <StyledMediaCardBrief width={230} height={330} navTo={navTo} imgURL={imgURL}>
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
    </StyledMediaCardBrief>
  );
};

export default MediaCardBrief;
