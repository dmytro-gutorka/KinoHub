import { UserMediaStats } from '@shared/types/generalTypes';
import { Grid } from '@mui/material';
import DashboardQuickStatsItem from '@features/dashboard/ui/DashboardQuickStatsItem';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface DashboardQuickStatsProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardQuickStats({ userMediaStats }: DashboardQuickStatsProps) {
  const { maxRating, minRating, commentsCount, ratingCount } =
    userMediaStats.userMediaAggregatedStats;

  const quickStats = [
    { statsLabel: 'Max movie rating', statsValue: maxRating },
    { statsLabel: 'Min movie rating', statsValue: minRating },
    { statsLabel: 'Comments count', statsValue: commentsCount },
    { statsLabel: 'Ratings count', statsValue: ratingCount },
  ];

  return (
    <BlockWrapper title="Quick Stats">
      <Grid container rowSpacing={15}>
        {quickStats.map(({ statsLabel, statsValue }) => (
          <DashboardQuickStatsItem
            key={statsLabel}
            statsLabel={statsLabel}
            statsValue={statsValue}
          />
        ))}
      </Grid>
    </BlockWrapper>
  );
}
