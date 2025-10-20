import { UserMediaStats } from '@shared/types/generalTypes';
import { Grid } from '@mui/material';
import DashboardQuickStatsItem from '@features/dashboard/ui/DashboardQuickStatsItem';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface DashboardQuickStatsProps {
  userMediaStats: UserMediaStats;
}

export default function DashboardQuickStatsList({ userMediaStats }: DashboardQuickStatsProps) {
  const { maxRating, minRating, commentsCount, ratingCount } =
    userMediaStats.aggregatedUserMediaStats;

  const quickStats = [
    { statsLabel: 'Max rating', statsValue: maxRating },
    { statsLabel: 'Min rating', statsValue: minRating },
    { statsLabel: 'Commented', statsValue: commentsCount },
    { statsLabel: 'Rated', statsValue: ratingCount },
  ];

  return (
    <BlockWrapper title="Quick Stats">
      <Grid container minHeight={350} justifyContent="center" alignItems="center">
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
