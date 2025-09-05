import { Clickable, IModalOpenCloseProps } from '@shared/ui/Modal/types';
import { Button } from '@mui/material';
import React from 'react';
import renderChildWithClickHandler from '@shared/ui/Modal/lib/renderChildWithClickHandler';
import { useModalContext } from '@shared/ui/Modal';

export default function Open({ asChild = false, children, label = 'Open window'}: IModalOpenCloseProps) {
  const { openModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return renderChildWithClickHandler(children, openModal)

  return (
    <Button type="submit" onClick={openModal}>{label}</Button>
  )
}