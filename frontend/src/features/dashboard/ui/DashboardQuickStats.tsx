import { Grid } from '@mui/material';
import { MediaContentBlock } from '@features/media';
import DashboardQuickStatsItem from '@features/dashboard/ui/DashboardQuickStatsItem';

export default function DashboardQuickStats({ userMediaStats }) {
  const { watchedMovie, watchedTv, ratingCount } = userMediaStats.userMediaAggregatedStats;

  const quickStats = [
    {
      statsLabel: 'Movies',
      statsValue: watchedMovie,
    },
    {
      statsLabel: 'TV Shows',
      statsValue: watchedTv,
    },
    {
      statsLabel: 'Rated movies',
      statsValue: 2,
    },
    {
      statsLabel: 'Movies watched',
      statsValue: 3,
    },
  ];

  return (
    <MediaContentBlock blockTitle="Quick Stats">
      <Grid container rowSpacing={15}>
        {quickStats.map(({ statsLabel, statsValue }) => (
          <DashboardQuickStatsItem
            key={statsLabel}
            statsLabel={statsLabel}
            statsValue={statsValue}
          />
        ))}
      </Grid>
    </MediaContentBlock>
  );
}
