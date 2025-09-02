import { Stack, Typography } from '@mui/material';
import DashboardMovieStats from '@features/dashboard/ui/DashboardMovieStats';
import DashboardTopRatedMovies from '@features/dashboard/ui/DashboardTopRatedMovies';
import { UserMediaStats } from '@shared/types/generalTypes';

interface DashboardMoviesTabProps {
  userMediaStats: UserMediaStats
}

export default function DashboardMoviesTab({ userMediaStats }: DashboardMoviesTabProps) {
  return (
    <Stack spacing={6}>
      <Typography variant="h5" fontWeight={900}>
        Movie Statistics
      </Typography>
      <DashboardMovieStats userMediaStats={userMediaStats} />
      <DashboardTopRatedMovies userMediaStats={userMediaStats} />
    </Stack>
  );
}
