import { IModalProvider } from '@shared/ui/Modal/types';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { ModalContext } from '@shared/ui/Modal/model/context';

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);
  const toggleModal = useCallback(() => setModalOpen((v) => !v), []);

  const value = useMemo((): IModalProvider =>
      ({ isModalOpen, openModal, closeModal, toggleModal }),
    [isModalOpen, openModal, closeModal, toggleModal]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}
