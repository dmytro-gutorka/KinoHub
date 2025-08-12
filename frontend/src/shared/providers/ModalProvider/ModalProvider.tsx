import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface IModalProvider {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const ModalContext = createContext<IModalProvider | null>(null);

export function useModalContext() {
  const context: IModalProvider | null = useContext(ModalContext);

  if (!context) throw new Error('useModal must be used within a ModalProvider');

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
