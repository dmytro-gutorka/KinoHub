import React from 'react';

export type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };

export interface IModalProvider {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}
