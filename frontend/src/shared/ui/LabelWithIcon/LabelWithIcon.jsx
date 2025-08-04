import { Stack, Typography } from '@mui/material';

const LabelWithIcon = ({ label, children }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1">{label}</Typography>
    </Stack>
  );
};

export default LabelWithIcon;
