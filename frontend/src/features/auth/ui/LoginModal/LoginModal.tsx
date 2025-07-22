import { Box, DialogContent, Icon, Stack, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import LogoIcon from '@shared/icons/LogoIcon';
import LoginForm from '@features/auth/ui/LoginForm';
import CloseIcon from '@mui/icons-material/Close';

interface SignInModalProps {
  isOpen: boolean;
  onClick: (a: boolean) => void;
}

const LoginModal = ({ isOpen, onClick }: SignInModalProps) => {
  const theme = useTheme();

  return (
    <Dialog open={isOpen}>
      <DialogContent sx={{ padding: 0 }}>
        <Stack sx={{ padding: 6, background: theme.palette.gradientGrey }}>
          <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center">
              <LogoIcon />
              <Typography fontWeight={900} fontSize={25} component="h2">
                Welcome Back
              </Typography>
            </Stack>
            <CloseIcon cursor="pointer" onClick={() => onClick(false)} />
          </Stack>
          <Typography>Sign in to continue your movie journey</Typography>
        </Stack>
        <Stack sx={{ padding: 6, background: 'transparent' }}>
          <LoginForm />
        </Stack>
      </DialogContent>
      <Typography>Don't have an account? Sign up</Typography>
    </Dialog>
  );
};

export default LoginModal;
