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
      onClick={closeModal}
      size="small"
      aria-label="Close dialog"
      sx={{ position: 'absolute', right: 25, top: 25 }}
    >
      <CloseIcon />
    </IconButton>
  );
}
