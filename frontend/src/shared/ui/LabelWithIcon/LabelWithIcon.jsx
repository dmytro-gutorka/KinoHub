import { Stack, Typography } from '@mui/material';

const LabelWithIcon = ({ data, children }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1">{data}</Typography>
    </Stack>
  );
};

export default LabelWithIcon;
