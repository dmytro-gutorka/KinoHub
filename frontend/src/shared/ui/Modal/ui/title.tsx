import React, { ReactElement } from 'react';
import { DialogContent, Stack, Typography } from '@mui/material';

type TitleProps = React.ComponentProps<typeof Stack> & {
  icon?: ReactElement | null;
  subTitle?: string;
};

export default function Title({ children, icon = null, subTitle, ...props }: TitleProps) {
  return (
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Stack direction="row" alignItems="center" display="flex" gap={3} {...props}>
        {icon}
        <Typography variant="h5">{children}</Typography>
      </Stack>
      {subTitle && <Typography variant="body1">{subTitle}</Typography>}
    </DialogContent>
  );
}
