import { DialogContent, DialogContentProps } from '@mui/material';
import { useModalContext } from '@shared/ui/Modal';
import React, { ReactElement } from 'react';

type ContentProps = DialogContentProps & { children: ReactElement<{ onClose: () => void }> };

export default function Content({ children, ...props }: ContentProps) {
  const { closeModal } = useModalContext();

  return (
    <DialogContent {...props}>
      {React.cloneElement(children, { onClose: closeModal })}
    </DialogContent>
  );
}
