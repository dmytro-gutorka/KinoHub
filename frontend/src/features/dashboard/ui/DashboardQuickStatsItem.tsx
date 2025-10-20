import { Grid, Stack, Typography } from '@mui/material';
import theme from '@app/theme/theme';

interface DashboardQuickStatsItemProps {
  statsLabel: string;
  statsValue: number | null;
}

export default function DashboardQuickStatsItem({
  statsLabel,
  statsValue,
}: DashboardQuickStatsItemProps) {
  return (
    <Grid size={6}>
      <Stack justifyContent="space-between" alignItems="center" gap={1}>
        <Typography variant="h4" fontWeight={900} fontSize={30}>
          {statsValue}
        </Typography>

        <Stack alignItems="center">
          <Typography variant="subtitle1" color={theme.palette.grey[300]}>
            {statsLabel}
          </Typography>

          <Typography variant="subtitle1" color={theme.palette.grey[300]}>
            Movies/Tv Shows
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
