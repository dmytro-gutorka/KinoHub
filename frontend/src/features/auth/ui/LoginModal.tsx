import { DialogContent, IconButton, Stack, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import LogoIcon from '@shared/icons/LogoIcon';
import LoginForm from '@features/auth/ui/LoginForm';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal ({ isOpen, onClose }: LoginModalProps){
  const theme = useTheme();

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>

        <DialogTitle mb={5}>
          <Stack flexDirection="row" justifyContent="space-between" alignItems="center" gap={2} mb={2}>
          <Stack flexDirection="row" gap={2}>
            <LogoIcon />
            <Typography variant="h5">Welcome Back</Typography>

          </Stack>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
          </Stack>
            <Typography textAlign='center' variant="body1">Sign in to continue your movie journey</Typography>
        </DialogTitle>

        <DialogContent>
          <LoginForm onClose={onClose}/>
      </DialogContent>
    </Dialog>
  );
};
