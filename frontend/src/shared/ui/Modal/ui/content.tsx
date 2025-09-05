import { ContentProps } from '@shared/ui/Modal/types';
import { DialogContent } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import React from 'react';

export default function Content({ children, ...props}: ContentProps) {
  const { closeModal } = useModalContext();

  return (
    <DialogContent {...props}>
      {React.cloneElement(children, {onClose: closeModal})}
    </DialogContent>
  )
}