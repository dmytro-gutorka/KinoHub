import { ContainerProps } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import Dialog from '@mui/material/Dialog';
import React from 'react';

export default function Container({ children, ...props}: ContainerProps) {
  const { closeModal, isModalOpen } = useModalContext();

  return (
    <Dialog {...props} open={isModalOpen} onClose={closeModal}>{children}</Dialog>
)
}