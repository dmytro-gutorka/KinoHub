import { UserMediaStats } from '@shared/types/generalTypes';
import { Chip, Stack, styled, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import theme from '@app/theme/theme';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import getPosterUrl from '@shared/helpers/getPosterUrl';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: theme.shape.borderRadiusScale.md,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: theme.shape.borderRadiusScale.md,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));

function calcPercentage(value: number, total: number) {
  return (value / total) * 100;
}

interface DashboardTvShowsTabProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardTvShowsTab({ userMediaStats }: DashboardTvShowsTabProps) {
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
            calcPercentage(tvShowItem.totalWatchedEpisodes, tvShowItem.totalEpisodes).toFixed(1)
          );

          return (
            <Stack flexGrow={1} width="50%" key={tvShowItem.id}>
              <Stack
                borderRadius={theme.shape.borderRadiusScale.md}
                border={theme.customStyles.border}
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

                  <BorderLinearProgress
                    variant="determinate"
                    value={watchedEpisodesPercentage}
                    sx={{
                      mb: 2,
                      [`& .${linearProgressClasses.bar}`]: {
                        backgroundColor: watchedEpisodesPercentage === 100 && '#30E830',
                      },
                    }}
                  />
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
