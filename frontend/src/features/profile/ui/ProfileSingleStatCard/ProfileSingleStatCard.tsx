import { Stack, Typography, useTheme } from '@mui/material';

interface ProfileSingleStatCardProps {
  label: string;
  value: number | string;
}

export default function ProfileSingleStatCard({ label, value }: ProfileSingleStatCardProps) {
  const theme = useTheme();

  return (
    <Stack
      borderRadius={theme.shape.borderRadiusScale.md}
      border={theme.border}
      bgcolor={theme.palette.darkBlueAccent}
      justifyContent="center"
      alignItems="center"
      py={2}
      px={12}
    >
      <Typography variant="h5">{value}</Typography>
      <Typography variant="body1">{label}</Typography>
    </Stack>
  );
}
