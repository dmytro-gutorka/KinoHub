import { MediaCastAndCrewBlockProps } from '@features/media/model/mediaTypes';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import getPosterURL from '@shared/helpers/getPosterURL';

const MediaCastAndCrewBlock = ({ cast }: MediaCastAndCrewBlockProps) => {
  const theme = useTheme();

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customStyles.border}>
      <Typography variant="h5" component="h3" mb={2}>
        Cast & Crew
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={4}>
        {cast.slice(0, 10).map((actor) => {
          const { character, name, profile_path: profilePath, id } = actor;
          const photoURL = getPosterURL(profilePath);
          return (
            <Stack key={id}>
              <Box component="img" src={photoURL} width="100px" height="145px"></Box>
              <Box width="120px">{name}</Box>
              <Box color="grey" width="120px">
                {character}
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default MediaCastAndCrewBlock;
