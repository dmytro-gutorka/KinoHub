import { styled } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const LinearProgressStyled = styled(LinearProgress)(({ theme, value }) => ({
  height: 10,
  borderRadius: theme.shape.borderRadiusScale.md,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: theme.shape.borderRadiusScale.md,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: value === 100 && '#66bb6a',
  },
}));

export default function BorderLinearProgress({ value, props }: { value: number; props?: any }) {
  return <LinearProgressStyled variant="determinate" value={value} sx={{ mb: 2 }} {...props} />;
}
