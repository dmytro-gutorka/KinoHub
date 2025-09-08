import React, { useId } from 'react';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Box, DialogContent, DialogContentText } from '@mui/material';

export default function DialogWindow({
  actions = true,
  description,
  onClickYes,
  children,
  title,
  confirmButtonText = 'Yes',
  cancelButtonText = 'No',
}) {
  // const { isModalOpen, closeModal } = useModalContext();

  const titleId = useId();
  const descriptionId = useId();

  const isDescriptionText = typeof description === 'string';

  const aria = {
    ...(title ? { 'aria-labelledby': titleId } : {}),
    ...(descriptionId ? { 'aria-describedby': descriptionId } : {}),
  };

  return (
    <React.Fragment>
      {children}
      <Dialog open={isModalOpen} onClose={closeModal} {...aria}>
        {title && <DialogTitle id={titleId}>{title}</DialogTitle>}

        <DialogContent sx={{ minWidth: '500px' }}>
          {isDescriptionText && (
            <DialogContentText id={descriptionId}>{description}</DialogContentText>
          )}
          {!isDescriptionText && <Box id={descriptionId}>{description}</Box>}
        </DialogContent>
        {actions && (
          <DialogActions>
            <Button onClick={closeModal}>{cancelButtonText}</Button>
            <Button onClick={onClickYes}>{confirmButtonText}</Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}

// пробрасывать фому через пропсы