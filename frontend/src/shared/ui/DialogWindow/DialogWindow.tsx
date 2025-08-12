import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import React, { useId } from 'react';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

export default function DialogWindow({
  actions = true,
  description,
  onClickYes,
  children,
  onClose,
  title,
  open,
}) {
  const titleId = useId();
  const descriptionId = useId();

  const aria = {
    ...(title ? { 'aria-labelledby': titleId } : {}),
    ...(descriptionId ? { 'aria-describedby': descriptionId } : {}),
  };

  return (
    <React.Fragment>
      {children}
      <Dialog open={open} onClose={onClose} {...aria}>
        {title && <DialogTitle id={titleId}>{title}</DialogTitle>}
        {description && (
          <DialogContent>
            <DialogContentText id={descriptionId}>{description}</DialogContentText>
          </DialogContent>
        )}
        {actions && (
          <DialogActions>
            <Button onClick={onClose}>No</Button>
            <Button onClick={onClickYes} autoFocus>
              Yes
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </React.Fragment>
  );
}
