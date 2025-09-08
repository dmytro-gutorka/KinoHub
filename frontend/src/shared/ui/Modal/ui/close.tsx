import { Clickable, IModalOpenCloseProps } from '@shared/ui/Modal/types';
import { IconButton } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import { composeHandlers } from '@shared/ui/Modal/lib/composeHandlers';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

export default function Close({ asChild = false, children }: IModalOpenCloseProps) {
  const { closeModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return React.cloneElement(children, {
      onClick: composeHandlers(children.props.onClick, closeModal),
    });

  return (
    <IconButton
      aria-label="Close dialog"
      onClick={closeModal}
      size="small"
      sx={{ position: 'absolute', right: 8, top: 8 }}
    >
      <CloseIcon />
    </IconButton>
  );
}
