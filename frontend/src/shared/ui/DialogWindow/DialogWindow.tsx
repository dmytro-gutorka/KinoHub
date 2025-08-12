import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import React, { useId } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useModalContext } from '@shared/providers/ModalProvider/ModalProvider';
import { MenuItem } from '@mui/material';

export default function DialogWindow({ actions = true, description, onClickYes, children, title }) {
  const { isModalOpen, closeModal, openModal } = useModalContext();

  console.log(isModalOpen);

  const titleId = useId();
  const descriptionId = useId();

  const aria = {
    ...(title ? { 'aria-labelledby': titleId } : {}),
    ...(descriptionId ? { 'aria-describedby': descriptionId } : {}),
  };

  return (
    <React.Fragment>
      <MenuItem onClick={openModal}>Delete comment</MenuItem>
      <Dialog open={isModalOpen} onClose={closeModal} {...aria}>
        {title && <DialogTitle id={titleId}>{title}</DialogTitle>}
        {description && (
          <DialogContent>
            <DialogContentText id={descriptionId}>{description}</DialogContentText>
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
