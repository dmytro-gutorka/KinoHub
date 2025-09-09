import { IconButton } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import CloseIcon from '@mui/icons-material/Close';
import React, { ReactNode } from 'react';

export interface IModalCloseProps {
  asChild?: boolean;
  children?: ReactNode;
  label?: string;
  userOnClose?: () => void;
}

export default function Close({ asChild = false, children, userOnClose }: IModalCloseProps) {
  const { closeModal } = useModalContext();

  // if (asChild && React.isValidElement<Clickable>(children))
  //   return React.cloneElement(children, {
  //     onClick: composeHandlers(children.props.onClick, closeModal),
  //   });

  function handleClose() {
    userOnClose?.();
    closeModal();
  }

  return (
    <IconButton onClick={handleClose} size="small" aria-label="Close dialog">
      <CloseIcon />
    </IconButton>
  );
}
