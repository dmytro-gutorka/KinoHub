import React, { ReactElement } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContentProps, DialogProps } from '@mui/material';

export type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };
export type TitleProps = React.ComponentProps<typeof DialogTitle> & {icon : ReactElement | null}
export type ContainerProps = Omit<DialogProps, 'open' | 'onClose'> & { children?: React.ReactNode }
export type ContentProps = DialogContentProps & { children: ReactElement<{onClose: () => void}> }

export interface IModalOpenCloseProps {
  asChild?: boolean,
  children?: React.ReactNode,
  label?: string
}

export interface IModalProvider {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}