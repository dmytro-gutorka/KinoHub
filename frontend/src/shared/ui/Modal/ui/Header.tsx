import React, { ReactElement } from 'react';
import { DialogContent, Stack, Typography } from '@mui/material';
import { Modal } from '@shared/ui/Modal';

type TitleProps = React.ComponentProps<typeof Stack> & {
  icon?: ReactElement | null;
  subTitle?: string;
  userOnClose?: () => void;
};

export default function Header({
  children,
  subTitle,
  userOnClose,
  icon = null,
  ...props
}: TitleProps) {
  return (
    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={3}>
        <Stack direction="row" alignItems="center" display="flex" gap={3} {...props}>
          {icon}
          <Typography variant="h5">{children}</Typography>
        </Stack>
        <Modal.Close userOnClose={userOnClose} />
      </Stack>

      {subTitle && <Typography variant="body1">{subTitle}</Typography>}
    </DialogContent>
  );
}
