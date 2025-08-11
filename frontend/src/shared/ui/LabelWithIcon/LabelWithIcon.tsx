import { Stack, Typography } from '@mui/material';
import { JSX } from 'react';

interface LabelWithIconProps {
  label: string | number;
  children: JSX.Element;
  labelFontWeight?: number;
  fontColor?: string;
}

const LabelWithIcon = ({
  label,
  children,
  labelFontWeight = 500,
  fontColor = 'white',
}: LabelWithIconProps) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      {children}
      <Typography variant="subtitle1" fontWeight={labelFontWeight} color={fontColor}>
        {label}
      </Typography>
    </Stack>
  );
};

export default LabelWithIcon;
