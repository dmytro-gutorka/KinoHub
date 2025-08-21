import MovieOutlineIcon from '@shared/icons/MovieOutlineIcon';
import TvShowOutlineIcon from '@shared/icons/TvShowOutlineIcon';
import ChartActivityIcon from '@shared/icons/ChartActivityIcon';
import DashboardCard from '@features/dashboard/ui/DashboardCard';
import ChartUpLineIcon from '@shared/icons/ChartUpLineIcon';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { Grid, Stack, useTheme } from '@mui/material';

export default function DashboardMainStats({ userMediaStats }) {
  const theme = useTheme();

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard
          dashStat={userMediaStats?.userMediaAggregatedStats.watchedMovie}
          mainColor="blue"
          label="Movies watched"
        >
          <Stack p={3} borderRadius={1} sx={{ background: theme.palette['blue'].dark }}>
            <MovieOutlineIcon stroke={theme.palette['blue'].light} />
          </Stack>
          <ChartUpLineIcon stroke={theme.palette['blue'].light} />
        </DashboardCard>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard
          dashStat={userMediaStats?.userMediaAggregatedStats.watchedEpisodes}
          mainColor="green"
          label="TV episodes"
        >
          <Stack p={3} borderRadius={1} sx={{ background: theme.palette['green'].dark }}>
            <TvShowOutlineIcon stroke={theme.palette['green'].light} />
          </Stack>
          <PlayCircleOutlineOutlinedIcon stroke={theme.palette['green'].light} />
        </DashboardCard>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard
          dashStat={userMediaStats?.userMediaAggregatedStats.runtimeMovie + 'm'}
          mainColor="purple"
          label="Watch time"
        >
          <Stack p={3} borderRadius={1} sx={{ background: theme.palette['purple'].dark }}>
            <AccessTimeOutlinedIcon stroke={theme.palette['purple'].light} />
          </Stack>
          <ChartActivityIcon stroke={theme.palette['purple'].light} />
        </DashboardCard>
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 6 }}>
        <DashboardCard
          dashStat={userMediaStats?.userMediaAggregatedStats.avgRating ?? 0.0}
          mainColor="orange"
          label="Avg rating"
        >
          <Stack p={3} borderRadius={1} sx={{ background: theme.palette['orange'].dark }}>
            <WorkspacePremiumOutlinedIcon stroke={theme.palette['orange'].light} />
          </Stack>
          <StarBorderPurple500OutlinedIcon stroke={theme.palette['orange'].light} />
        </DashboardCard>
      </Grid>
    </Grid>
  );
}
