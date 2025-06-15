import { Box, Stack } from '@mui/material';

const LabelWithIcon = ({ label, children }) => {
  return (
    <Stack direction="row" alignItems="start" gap={1}>
      {children}
      {label}
    </Stack>
  );
};

export default LabelWithIcon;
