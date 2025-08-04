import { SeasonItemProps } from '@features/tvShow/model/types/tvShowTypes';
import { Box, Stack, useTheme } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';

const SeasonItem = ({ seasonData, tvSeason, onSetTvSeason }: SeasonItemProps) => {
  const {
    poster_path: posterPath,
    season_number: seasonNumber,
    air_date: airDate,
    episodes,
  } = seasonData;

  const episodesNumber = episodes?.length;
  const theme = useTheme();
  const imgURL = getPosterUrl(posterPath);

  return (
    <Box
      onClick={() => onSetTvSeason(seasonNumber)}
      border={theme.customStyles.border}
      width="100%"
      borderRadius={1}
      p={2}
      sx={{
        background: `${tvSeason === seasonNumber ? theme.palette.gradientGrey : 'transparent'}`,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box component="img" src={imgURL} width="48px" height="72px" borderRadius={1} />
        <Stack>
          <Box component="span">Season {seasonNumber}</Box>
          <Box component="span">{episodesNumber} episodes</Box>
          <Box component="span">0/{episodesNumber} watched</Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SeasonItem;
