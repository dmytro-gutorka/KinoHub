import { DialogProps } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import Dialog from '@mui/material/Dialog';
import React from 'react';

export type ContainerProps = Omit<DialogProps, 'open' | 'onClose'> & { children?: React.ReactNode };

export default function Container({ children, ...props }: ContainerProps) {
  const { closeModal, isModalOpen } = useModalContext();

  return (
    <Dialog {...props} open={isModalOpen} onClose={closeModal} maxWidth="xl">
      {children}
    </Dialog>
  );
}
