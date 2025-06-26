import { Box, Stack, useTheme } from '@mui/material';

import getPosterURL from '../../../../shared/helpers/getPosterURL';

const SeasonItem = ({ seasonData, tvSeason, onSetTvSeason }) => {
  const {
    poster_path: posterPath,
    season_number: seasonNumber,
    episode_count: episodeCount,
    first_air_date: airDate,
  } = seasonData;

  const theme = useTheme();
  const imgURL = getPosterURL(posterPath);

  return (
    <Box
      onClick={() => onSetTvSeason(seasonNumber)}
      border={theme.customComponents.border}
      width="100%"
      borderRadius={1}
      p={2}
      sx={{ background: `${tvSeason === seasonNumber ? theme.palette.gradientGrey : 'transparent'}` }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box component="img" src={imgURL} width="48px" height="72px" borderRadius={1} />
        <Stack>
          <Box component="span">Season {seasonNumber}</Box>
          <Box component="span">{episodeCount} episodes</Box>
          <Box component="span">0/{episodeCount} watched</Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SeasonItem;
