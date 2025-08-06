import { Box, Stack, useTheme } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import { SeasonDataWithEpisodes } from '@shared/types/generalTypes';

export interface SeasonItemProps {
  seasonItem: SeasonDataWithEpisodes;
  currentSeasonNumber: number;
  onSeasonNumber: (tvSeason: number) => void;
}

const SeasonItem = ({ seasonItem, currentSeasonNumber, onSeasonNumber }: SeasonItemProps) => {
  const {
    poster_path: posterPath,
    season_number: seasonNumber,
    air_date: airDate,
    episode_count: episodeCount,
  } = seasonItem;

  const theme = useTheme();
  const imgURL = getPosterUrl(posterPath);

  return (
    <Box
      onClick={() => onSeasonNumber(seasonNumber)}
      border={theme.customStyles.border}
      width="100%"
      borderRadius={1}
      p={2}
      sx={{
        background: `${currentSeasonNumber === seasonNumber ? theme.palette.gradientGrey : 'transparent'}`,
      }}
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
