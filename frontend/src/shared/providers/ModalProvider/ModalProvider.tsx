import React, { createContext, JSX, ReactElement, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { Button, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

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

interface IModalOpenCloseProps {
  asChild?: boolean,
  children?: React.ReactNode,
  label?: string
}

type Clickable = { onClick?: React.MouseEventHandler<HTMLElement> };


function Open({ asChild = false, children, label = 'Open window'}: IModalOpenCloseProps): JSX.Element {
  const { openModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children)) {
    return renderChildWithClickHandler(children, openModal)
  }

    // const userOnClick = children.props.onClick;
    //
    // const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    //   userOnClick?.(e);
    //   if (e.defaultPrevented) return;
    //   openModal();
    // };

    // return React.cloneElement<Clickable>(children, { onClick: handleClick });
  return <Button type="submit" onClick={openModal}>{label}</Button>
}


function Content({ children, ...props}: React.ComponentProps<typeof Dialog>) {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <Dialog {...props} open={isModalOpen} onClose={closeModal}>
      {React.cloneElement(children, {onClose: closeModal})}
    </Dialog>
  )
}

function Title({children, ...props}: React.ComponentProps<typeof DialogTitle>) {

  return(
    <DialogTitle {...props}>
      {children}
    </DialogTitle>
  )
}


function Close({ asChild = false, children, label = 'Close window'}: IModalOpenCloseProps): JSX.Element {
  const { closeModal } = useModalContext();

  if (asChild && React.isValidElement<Clickable>(children)) {
    return renderChildWithClickHandler(children, closeModal)
  }

  return (
    <IconButton cursor="pointer" onClick={closeModal}>
      <CloseIcon />
    </IconButton>
  )
}


export const Modal = Object.assign(ModalProvider, {Open, Content, Title, Close})