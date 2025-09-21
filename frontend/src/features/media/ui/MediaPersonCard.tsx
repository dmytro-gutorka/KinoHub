import { TmdbCast, TmdbCrew } from '@entities/types/tmdbEntities';
import { CardContent, CardMedia, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import HoverableCardWrapper from '@shared/ui/HoverableCardWrapper';

interface MediaActorProps {
  person: TmdbCast | TmdbCrew;
  width?: number | string;
  height?: number | string;
}

export default function MediaPersonCard({ person, width, height }: MediaActorProps) {
  const { character, name, profile_path: imagePath } = person;
  const imgUrl = getPosterUrl(imagePath);

  console.log(person);
  return (
    <HoverableCardWrapper cardWidth={width} flexGrow={1}>
      <CardMedia image={imgUrl} title="Card" sx={{ height: height, backgroundSize: 'cover' }} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {character}
        </Typography>
      </CardContent>
    </HoverableCardWrapper>
  );
}
