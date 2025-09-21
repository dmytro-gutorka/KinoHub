import { Box, CardContent, Stack, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import { TmdbCast, TmdbCrew } from '@entities/types/tmdbEntities';
import MediaCardHoverableWrapper from '@features/media/ui/MediaCardHoverableWrapper';

interface MediaActorProps {
  person: TmdbCast | TmdbCrew;
  width?: number | string;
  height?: number | string;
}

export default function MediaPersonCard({ person, width, height }: MediaActorProps) {
  const { character, name, profile_path: profilePath } = person;
  const photoPath = getPosterUrl(profilePath);

  return (
    <Stack width={width} border="1px solid lightgrey" flexGrow={1}>
      <Box component="img" src={photoPath} alt={name} width={width} height={height} p={2} />

      <Stack p={2}>
        <Typography variant="h6">{name}</Typography>
        <Typography>{character}</Typography>
      </Stack>
    </Stack>

    // <Stack sx={{ backgroundColor: 'red' }}>
    //   <Box component="img" src={photoPath} alt={name} width={width} height={height} />
    //
    //   <Stack>
    //     <Typography>{name}</Typography>
    //     <Typography>{character}</Typography>
    //   </Stack>
    // </Stack>

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
