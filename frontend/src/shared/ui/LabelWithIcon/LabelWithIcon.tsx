import { Stack, Typography } from '@mui/material';
import { JSX } from 'react';

interface LabelWithIconProps {
  label: string | number;
  children: JSX.Element;
  labelFontWeight?: number;
}

const LabelWithIcon = ({ label, children, labelFontWeight = 500 }: LabelWithIconProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1" fontWeight={labelFontWeight}>
        {label}
      </Typography>
    </Stack>
  );
};

export default LabelWithIcon;
