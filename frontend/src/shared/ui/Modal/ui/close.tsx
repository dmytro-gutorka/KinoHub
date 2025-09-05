import { Clickable, IModalOpenCloseProps } from '@shared/ui/Modal/types';
import { IconButton } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import CloseIcon from '@mui/icons-material/Close';
import renderChildWithClickHandler from '@shared/ui/Modal/lib/renderChildWithClickHandler';
import React from 'react';


export default function Close({ asChild = false, children}: IModalOpenCloseProps) {
  const { closeModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return renderChildWithClickHandler(children, closeModal)

  return (
    <IconButton onClick={closeModal} aria-label="Close dialog" size="small" sx={{position: 'absolute', right: 8, top: 8}}>
      <CloseIcon />
  </IconButton>
)
}