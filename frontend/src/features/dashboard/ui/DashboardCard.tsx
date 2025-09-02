import { Box, Stack, Typography, useTheme } from '@mui/material';

const DashboardCard = ({ children, dashStat, mainColor, label }) => {
  const theme = useTheme();

  return (
    <Stack
      border={theme.customStyles.border}
      borderRadius={theme.shape.borderRadiusScale.md}
      minHeight="150px"
      minWidth="360px"
      gap={2}
      p={5}
      sx={{ background: theme.palette[mainColor].darkGradient }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        {children}
      </Stack>

      <Box pl={1}>
        <Typography variant="h5" fontWeight="900">
          {dashStat}
        </Typography>
        <Typography variant="subtitle1" color={theme.palette[mainColor].light}>
          {label}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.grey[400]}>
          This month
        </Typography>
      </Box>
    </Stack>
  );
};

export default DashboardCard;
