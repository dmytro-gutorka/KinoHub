import { DialogContent, IconButton, Typography, Button, DialogProps, DialogContentProps } from '@mui/material';
import React, { createContext, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };

type TitleProps = React.ComponentProps<typeof DialogTitle> & {icon : ReactElement | null}
type ContainerProps = Omit<DialogProps, 'open' | 'onClose'> & { children?: React.ReactNode }
type ContentProps = DialogContentProps & { children: ReactElement<{onClose: () => void}> }

interface IModalOpenCloseProps {
  asChild?: boolean,
  children?: React.ReactNode,
  label?: string
}

interface IModalProvider {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

function renderChildWithClickHandler(children: ReactElement<Clickable>, cb: () => void) {
  const userOnClick = children.props.onClick;
  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    userOnClick?.(e)
    if (e.defaultPrevented) return;
    cb();
  }
  return React.cloneElement(children, { onClick: handleClick })
}

const ModalContext = createContext<IModalProvider | null>(null);

export function useModalContext() {
  const context: IModalProvider | null = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within a ModalProvider');

  return context;
}

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const toggleModal = useCallback(() => setModalOpen((v) => !v), []);

  const value = useMemo(
    (): IModalProvider => ({ isModalOpen, openModal, closeModal, toggleModal }),
    [isModalOpen, openModal, closeModal, toggleModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}


function Container({ children, ...props}: ContainerProps) {
  const { closeModal, isModalOpen } = useModalContext();

  return (
    <Dialog {...props} open={isModalOpen} onClose={closeModal}>{children}</Dialog>
  )
}

function Open({ asChild = false, children, label = 'Open window'}: IModalOpenCloseProps) {
  const { openModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return renderChildWithClickHandler(children, openModal)

  return <Button type="submit" onClick={openModal}>{label}</Button>
}

function Content({ children, ...props}: ContentProps) {
  const { closeModal } = useModalContext();

  return (
      <DialogContent {...props}>
        {React.cloneElement(children, {onClose: closeModal})}
      </DialogContent>
  )
}

function Title({children, icon = null, ...props}: TitleProps) {

  return(
    <DialogTitle display="flex"  flexDirection="row" alignItems="center" gap={2} p={10} {...props}>
      {icon}
      <Typography variant="h5">{children}</Typography>
    </DialogTitle>
  )
}

function Close({ asChild = false, children}: IModalOpenCloseProps) {
  const { closeModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children))
    return renderChildWithClickHandler(children, closeModal)

  return (
    <IconButton onClick={closeModal} aria-label="Close dialog" size="small" sx={{position: 'absolute', right: 8, top: 8}}>
      <CloseIcon />
    </IconButton>
  )
}

export const Modal = Object.assign(ModalProvider, {Open, Content, Title, Close, Container})