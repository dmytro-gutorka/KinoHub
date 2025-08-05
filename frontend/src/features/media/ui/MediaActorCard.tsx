import { MediaActorProps } from '@features/media/model/types/mediaTypes';
import { Box, Stack } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';

export default function MediaActorCard({ actor }: MediaActorProps) {
  const { id, character, name, profile_path: profilePath } = actor;
  const photoPath = getPosterUrl(profilePath);

  return (
    <Stack key={id}>
      <Box component="img" src={photoPath} width="100px" height="145px"></Box>
      <Box width="120px">{name}</Box>
      <Box color="grey" width="120px">
        {character}
      </Box>
    </Stack>
  );
}
