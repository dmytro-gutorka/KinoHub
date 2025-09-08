import DialogTitle from '@mui/material/DialogTitle';
import React, { ReactElement } from 'react';

type TitleProps = React.ComponentProps<typeof DialogTitle> & { icon?: ReactElement | null };

export default function Title({ children, icon = null, ...props }: TitleProps) {
  return (
    <DialogTitle
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      display="flex"
      variant="h5"
      gap={2}
      p={10}
      {...props}
    >
      {icon} {children}
    </DialogTitle>
  );
}
