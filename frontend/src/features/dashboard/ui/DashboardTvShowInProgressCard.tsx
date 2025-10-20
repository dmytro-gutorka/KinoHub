import { TvShowInProgress } from '@shared/types/generalTypes';
import { Chip, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import theme from '@app/theme/theme';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import calcPercentage from '@shared/helpers/calculatePercentage';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import BorderLinearProgress from '@shared/ui/BorderLinearProgress';

interface DashboardTvShowInProgressCardProps {
  tvShowItem: TvShowInProgress;
}

function decideChipColor(status: string) {
  return status === 'Returning Series' ? 'primary' : status === 'Canceled' ? 'error' : 'success';
}

export default function DashboardTvShowInProgressCard({
  tvShowItem,
}: DashboardTvShowInProgressCardProps) {
  const chipColor = decideChipColor(tvShowItem.status);
  const watchedEpisodesPercentage = calcPercentage(
    tvShowItem.totalWatchedEpisodes,
    tvShowItem.totalEpisodes
  );

  return (
    <Stack flexGrow={1} width="50%">
      <Stack
        borderRadius={theme.shape.borderRadiusScale.md}
        border={theme.border}
        direction="row"
        width="100%"
        gap={4}
        p={2}
      >
        <Box
          borderRadius={theme.shape.borderRadiusScale.md}
          component="img"
          src={getPosterUrl(tvShowItem.posterPath)}
          width="160px"
          height="225px"
        />

        <Stack flexGrow={1} pr={6}>
          <Typography variant="h5" fontWeight={900}>
            {tvShowItem.title}
          </Typography>

          <Stack direction="row" gap={2} color={theme.palette.grey[300]} mb={3}>
            <Typography>{getYearFromDate(tvShowItem.releaseDate)} • </Typography>
            <Typography>{tvShowItem.totalSeasons} seasons</Typography>
          </Stack>

          <Stack direction="row" gap={2} justifyContent="space-between" mb={3}>
            <Typography>Progress</Typography>
            <Typography variant="body1" fontWeight={900}>
              {tvShowItem.totalWatchedEpisodes}/{tvShowItem.totalEpisodes} episodes
            </Typography>
          </Stack>

          <BorderLinearProgress value={watchedEpisodesPercentage} />
          <Typography>{watchedEpisodesPercentage}% complete</Typography>

          <Stack
            justifyContent="space-between"
            lineHeight={1}
            direction="row"
            gap={2}
            mb={3}
            mt={5}
          >
            <Stack direction="row" gap={1} alignItems="center">
              <StarIcon sx={{ color: theme.palette.starColor }} />
              {tvShowItem.voteAverage.toFixed(1)}
            </Stack>
            <Chip
              label={tvShowItem.status === 'Returning Series' ? 'Ongoing' : tvShowItem.status}
              color={chipColor}
              sx={{ fontWeight: 400 }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
