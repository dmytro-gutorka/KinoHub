import { createContext, useContext } from 'react';
import { IModalProvider } from '@shared/ui/Modal/types';

export const ModalContext = createContext<IModalProvider | null>(null);

export function useModalContext() {
  const context: IModalProvider | null = useContext(ModalContext);

  if (!context)
    throw new Error('useModal must be used within a ModalProvider');

  return context;
}