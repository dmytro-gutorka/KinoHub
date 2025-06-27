import { Box, Stack, Typography, useTheme } from '@mui/material';

const DashboardCard = ({ children, dashStat, mainColor, label }) => {
  const theme = useTheme();

  return (
    <Stack
      border={theme.customComponents.border}
      borderRadius={2}
      minHeight="150px"
      width="360px"
      gap={2}
      p={5}
      sx={{ background: theme.palette[mainColor].darkGradient }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        {children}
      </Stack>

      <Box pl={1}>
        <Typography variant="h5" fontWeight="900">
          {dashStat}
        </Typography>
        <Typography variant="subtitle1" color={theme.palette[mainColor].light}>
          {label}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.grey[500]}>
          This month
        </Typography>
      </Box>
    </Stack>
  );
};

export default DashboardCard;
