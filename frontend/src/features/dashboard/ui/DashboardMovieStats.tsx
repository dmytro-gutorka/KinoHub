import { UserMediaStats } from '@shared/types/generalTypes';
import { Stack } from '@mui/material';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import theme from '@app/theme/theme';
import MovieOutlineIcon from '@shared/icons/MovieOutlineIcon';
import DashboardMovieStatsCard from '@features/dashboard/ui/DashboardMovieStatsCard';

interface DashboardMovieStatsProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardMovieStats({ userMediaStats }: DashboardMovieStatsProps) {
  const { overallRuntime, watchedMedia, avgRating } = userMediaStats.aggregatedUserMediaStats;

  const movieStatsItems = [
    {
      label: 'Total Movies',
      text: watchedMedia,
      icon: <MovieOutlineIcon stroke={theme.palette['blue'].light} />,
    },
    {
      label: 'Average Rating',
      text: avgRating,
      icon: <StarBorderPurple500OutlinedIcon stroke={theme.palette['orange'].light} />,
    },
    {
      label: 'Total Runtime',
      text: overallRuntime,
      icon: <AccessTimeOutlinedIcon stroke={theme.palette['green'].light} />,
    },
  ];

  return (
    <Stack>
      <Stack spacing={4} direction={{ sm: 'column', lg: 'row' }}>
        {movieStatsItems.map(({ label, text, icon }) => (
          <DashboardMovieStatsCard key={label} label={label} text={text} icon={icon} />
        ))}
      </Stack>
    </Stack>
  );
}
