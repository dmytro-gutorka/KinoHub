import { DialogContent, IconButton, Stack, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import LogoIcon from '@shared/icons/LogoIcon';
import LoginForm from '@features/auth/ui/LoginForm';
import CloseIcon from '@mui/icons-material/Close';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal ({ isOpen, onClose }: LoginModalProps){
  const theme = useTheme();

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent sx={{ padding: 0}}>

        <Stack sx={{ padding: 6, background: theme.palette.gradientGrey }}>
          <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center">
              <LogoIcon />
              <Typography variant="h5">Welcome Back</Typography>
            </Stack>
            <IconButton cursor="pointer" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" >Sign in to continue your movie journey"</Typography>
        </Stack>

        <Stack sx={{ padding: 6, background: 'transparent' }}>
          <LoginForm onClose={onClose} />
        </Stack>

      {/*<Typography>Don't have an account? Sign up</Typography>*/}
      </DialogContent>
    </Dialog>
  );
};
