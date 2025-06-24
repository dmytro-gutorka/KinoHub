import {Box, Stack, Typography} from '@mui/material';

const LabelWithIcon = ({ label, children, fnSize = '10px' }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1">{label}</Typography>
    </Stack>
  );
};

export default LabelWithIcon;
