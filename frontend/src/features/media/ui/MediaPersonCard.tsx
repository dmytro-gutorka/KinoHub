import { CardContent, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import MediaCardHoverableWrapper from '@features/media/ui/MediaCardHoverableWrapper';
import { TmdbCast, TmdbCrew } from '@entities/types/tmdbEntities';

interface MediaActorProps {
  person: TmdbCast | TmdbCrew;
  width?: number | string;
  height?: number | string;
}

export default function MediaPersonCard({ person, width, height }: MediaActorProps) {
  const { character, name, profile_path: profilePath } = person;
  const photoPath = getPosterUrl(profilePath);

  return (
    <MediaCardHoverableWrapper width={width} height={height} imgURL={photoPath}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {character}
        </Typography>
      </CardContent>
    </MediaCardHoverableWrapper>
  );
}
