import { Clickable, IModalOpenCloseProps } from '@shared/ui/Modal/types';
import { Button } from '@mui/material';
import { composeHandlers } from '@shared/ui/Modal/lib/composeHandlers';
import { useModalContext } from '@shared/ui/Modal';
import React from 'react';

export default function Open({
  asChild = false,
  children,
  label = 'Open window',
}: IModalOpenCloseProps) {
  const { openModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return React.cloneElement(children, {
      onClick: composeHandlers(children.props.onClick, openModal),
    });

  return (
    <Button type="button" onClick={openModal}>
      {label}
    </Button>
  );
}
