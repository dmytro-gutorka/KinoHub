import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import React, { useId } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function DialogWindow({ actions = true, description, onClickYes, children, title }) {
  const { isModalOpen, closeModal } = useModalContext();

  const titleId = useId();
  const descriptionId = useId();

  const aria = {
    ...(title ? { 'aria-labelledby': titleId } : {}),
    ...(descriptionId ? { 'aria-describedby': descriptionId } : {}),
  };

  return (
    <React.Fragment>
      {children}
      <Dialog open={isModalOpen} onClose={closeModal} {...aria}>
        {title && <DialogTitle id={titleId}>{title}</DialogTitle>}
        {description && (
          <DialogContent>
            {description}
            {/*<DialogContentText id={descriptionId}>{description}</DialogContentText>*/}
          </DialogContent>
        )}
        {actions && (
          <DialogActions>
            <Button onClick={closeModal}>No</Button>
            <Button onClick={onClickYes} autoFocus>
              Yes
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}

// пробрасывать фому через пропсы