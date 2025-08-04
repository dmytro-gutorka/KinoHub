import { Stack, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import getWatchedEpisodeNumber from '@shared/helpers/getWatchedEpisodeNumber';
import getWatchedMediaNumber from '@shared/helpers/getWatchedMediaNumber';
import getAvgRating from '@shared/helpers/getAvgRating';
import getAvgRuntime from '@shared/helpers/getAvgRuntime';
import MovieOutlineIcon from '@shared/icons/MovieOutlineIcon';
import TvShowOutlineIcon from '@shared/icons/TvShowOutlineIcon';
import ChartActivityIcon from '@shared/icons/ChartActivityIcon';
import DashboardCard from '@shared/ui/DashboardCard';
import ChartUpLineIcon from '@shared/icons/ChartUpLineIcon';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

const Dashboard = () => {
  const { data: userStats, isSuccess } = useQuery({
    queryKey: ['userStats'],
    queryFn: () => 'getUserStats',
    staleTime: 5 * 1000,
  });

  const theme = useTheme();

  if (!isSuccess) return <div>Loading...</div>;

  const NumberOfWatchedMovies = getWatchedMediaNumber(userStats, 'movie');
  const NumberOfWatchedTvShows = getWatchedMediaNumber(userStats, 'tv');
  const NumberOfWatchedEpisodes = getWatchedEpisodeNumber(userStats);

  const avgRating = getAvgRating(userStats);
  const avgRuntime = getAvgRuntime(userStats);

  return (
    <Stack direction="row" flexWrap="wrap" gap={6} m={10}>
      <DashboardCard dashStat={NumberOfWatchedMovies} mainColor="blue" label="Movies watched">
        <Stack p={3} borderRadius={1} sx={{ background: theme.palette['blue'].dark }}>
          <MovieOutlineIcon stroke={theme.palette['blue'].light} />
        </Stack>
        <ChartUpLineIcon stroke={theme.palette['blue'].light} />
      </DashboardCard>

      <DashboardCard dashStat={NumberOfWatchedEpisodes} mainColor="green" label="TV episodes">
        <Stack p={3} borderRadius={1} sx={{ background: theme.palette['green'].dark }}>
          <TvShowOutlineIcon stroke={theme.palette['green'].light} />
        </Stack>
        <PlayCircleOutlineOutlinedIcon stroke={theme.palette['green'].light} />
      </DashboardCard>

      <DashboardCard dashStat={avgRuntime + 'm'} mainColor="purple" label="Watch time">
        <Stack p={3} borderRadius={1} sx={{ background: theme.palette['purple'].dark }}>
          <AccessTimeOutlinedIcon stroke={theme.palette['purple'].light} />
        </Stack>
        <ChartActivityIcon stroke={theme.palette['purple'].light} />
      </DashboardCard>

      <DashboardCard dashStat={avgRating} mainColor="orange" label="Avg rating">
        <Stack p={3} borderRadius={1} sx={{ background: theme.palette['orange'].dark }}>
          <WorkspacePremiumOutlinedIcon stroke={theme.palette['orange'].light} />
        </Stack>
        <StarBorderPurple500OutlinedIcon stroke={theme.palette['orange'].light} />
      </DashboardCard>
    </Stack>
  );
};
export default Dashboard;
