import { Box, Stack, Typography, useTheme } from '@mui/material';
import { JSX } from 'react';


interface DashboardCardProps {
  mainColor: 'green' | 'purple' | 'blue' | 'orange',
  children: JSX.Element,
  dashStat: number | string,
  label: string,
}

const DashboardCard = ({ children, dashStat, mainColor, label }: DashboardCardProps) => {
  const theme = useTheme();

  return (
    <Stack
      border={theme.border}
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
        <Typography variant="h5" children={dashStat}/>
        <Typography variant="subtitle1" color={theme.palette[mainColor].light} children={label}/>
        <Typography variant="body1" children="This month"/>
      </Box>
    </Stack>
  );
};

export default DashboardCard;
