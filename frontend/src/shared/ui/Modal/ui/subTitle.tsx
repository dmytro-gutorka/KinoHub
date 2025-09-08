import { ReactNode } from 'react';
import { DialogContent, Typography } from '@mui/material';

interface SubTitleProps {
  children: ReactNode;
}

export default function SubTitle({ children }: SubTitleProps) {
  return (
    <DialogContent>
      <Typography variant="body1">{children}</Typography>
    </DialogContent>
  );
}
