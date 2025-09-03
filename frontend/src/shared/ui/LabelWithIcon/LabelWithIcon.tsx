import { Stack, Typography } from '@mui/material';
import { JSX } from 'react';

interface LabelWithIconProps {
  label: string | number;
  children: JSX.Element;
}

const LabelWithIcon = ({
  label, children, }: LabelWithIconProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1"  children={label}/>
    </Stack>
  );
};

export default LabelWithIcon;
