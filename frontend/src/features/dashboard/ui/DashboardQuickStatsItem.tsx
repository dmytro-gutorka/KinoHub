import { Grid, Stack, Typography } from '@mui/material';
import theme from '@app/theme';

export default function DashboardQuickStatsItem({ statsLabel, statsValue }) {
  return (
    <Grid size={6}>
      <Stack justifyContent="space-between" alignItems="center" gap={1}>
        <Typography variant="h4" fontWeight={900} fontSize={30}>
          {statsValue}
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.grey[300]}>
          {statsLabel}
        </Typography>
      </Stack>
    </Grid>
  );
}
