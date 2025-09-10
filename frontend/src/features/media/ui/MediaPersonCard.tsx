import { Box, Stack, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
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
    <Stack sx={{ backgroundColor: 'red' }}>
      <Box component="img" src={photoPath} alt={name} width={width} height={height} />

      <Stack>
        <Typography>{name}</Typography>
        <Typography>{character}</Typography>
      </Stack>
    </Stack>

    // <MediaCardHoverableWrapper width={width} height={height} imgURL={photoPath}>
    //   <CardContent>
    //     <Typography variant="h6" gutterBottom>
    //       {name}
    //     </Typography>
    //     <Typography variant="body1" gutterBottom>
    //       {character}
    //     </Typography>
    //   </CardContent>
    // </MediaCardHoverableWrapper>
  );
}
