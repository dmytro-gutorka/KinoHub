import { Chip, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import theme from '@app/theme/theme';
import Box from '@mui/material/Box';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import useUserMediaStats from '@shared/hooks/useUserMediaStats';
import BorderLinearProgress from '@shared/ui/BorderLinearProgress';

function calcPercentage(value: number, total: number, toFixed: number = 1) {
  return Number((value / total) * 100).toFixed(toFixed);
}

export default function DashboardTvShowsTab() {
  const { data: userMediaStats, isSuccess } = useUserMediaStats('year', 'tv');

  if (!isSuccess) return null;

  const { tvShowInProgress } = userMediaStats;

  return (
    <>
      <Typography variant="h5" fontWeight={900} mb={6}>
        TV Show Progress
      </Typography>
      <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap={4}>
        {tvShowInProgress.map((tvShowItem) => {
          const chipColor =
            tvShowItem.status === 'Returning Series'
              ? 'primary'
              : tvShowItem.status === 'Canceled'
                ? 'error'
                : 'success';
          const watchedEpisodesPercentage: number = Number(
            calcPercentage(tvShowItem.totalWatchedEpisodes, tvShowItem.totalEpisodes)
          );

          return (
            <Stack flexGrow={1} width="50%" key={tvShowItem.id}>
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
                      label={
                        tvShowItem.status === 'Returning Series' ? 'Ongoing' : tvShowItem.status
                      }
                      color={chipColor}
                      variant="filled"
                      sx={{ fontWeight: 900 }}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}
