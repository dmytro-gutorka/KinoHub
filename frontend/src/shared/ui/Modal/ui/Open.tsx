import { Clickable } from '@shared/ui/Modal/types';
import React, { ReactNode } from 'react';
import { Button } from '@mui/material';
import { composeHandlers } from '@shared/ui/Modal/lib/composeHandlers';
import { useModalContext } from '@shared/ui/Modal';

export interface IModalOpenProps {
  asChild?: boolean;
  children?: ReactNode;
  label?: string;
}

export default function Open({ asChild = false, children, label = 'Open' }: IModalOpenProps) {
  const { openModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children)) {
    return React.cloneElement(children, {
      onClick: composeHandlers(children.props.onClick, openModal),
    });
  }

  return (
    <Button type="button" onClick={openModal}>
      {label}
    </Button>
  );
}
