import { TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';

export interface SeasonItemProps {
  season: TmdbSeasonInfo;
  currentSeason: number;
  onSeasonNumber: (seasonNumber: number) => void;
}

const SeasonItem = ({ season, currentSeason, onSeasonNumber }: SeasonItemProps) => {
  const {
    poster_path: posterPath,
    season_number: seasonNumber,
    air_date: airDate,
    episode_count: episodeCount,
  } = season;

  // const watchedEpisodes = episodeActionList.filter(
  //   (episode) => episode.isWatched && episode.season === seasonNumber
  // ).length;

  const theme = useTheme();
  const imgURL = getPosterUrl(posterPath);

  const imgWidth = 65;
  const imgHeight = 100;

  return (
    <Stack
      onClick={() => onSeasonNumber(seasonNumber)}
      sx={{
        background: `${currentSeason === seasonNumber ? theme.palette.gradientGrey : 'transparent'}`,
        border: theme.border,
        borderRadius: 1,
        padding: 2,
      }}
    >
      <Stack direction="row" gap={2} alignItems="center">
        <Box
          component="img"
          src={imgURL}
          width={imgWidth}
          height={imgHeight}
          borderRadius={theme.shape.borderRadiusScale.sm}
        />
        <Stack justifyContent="space-between">
          <Typography component="span" variant="subtitle1">
            Season {seasonNumber}
          </Typography>
          <Stack alignSelf="end">
            <Typography component="span" variant="body1">
              {episodeCount} episodes
            </Typography>
            <Typography component="span" variant="body1">
              {1}/{episodeCount} watched
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SeasonItem;
