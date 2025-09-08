import React, { ReactNode } from 'react';

export type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };

export interface IModalOpenCloseProps {
  asChild?: boolean;
  children?: ReactNode;
  label?: string;
}

export interface IModalProvider {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}
