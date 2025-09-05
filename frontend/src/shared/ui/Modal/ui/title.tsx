import { TitleProps } from '@shared/ui/Modal/types';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';

export default function Title({children, icon = null, ...props}: TitleProps) {

  return (
    <DialogTitle display="flex" variant="h5" flexDirection="row" alignItems="center" gap={2} p={10} {...props}>
      {icon} {children}
    </DialogTitle>
  )
}