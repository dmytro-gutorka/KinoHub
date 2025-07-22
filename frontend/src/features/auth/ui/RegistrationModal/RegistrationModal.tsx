import { DialogContent, Stack, Typography, useTheme } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import LogoIcon from '@shared/icons/LogoIcon';
import SignUpForm from '@features/auth/ui/RegistrationForm';
import CloseIcon from '@mui/icons-material/Close';

interface SignUpModalProps {
  isOpen: boolean;
  onClick: (a: boolean) => void;
}

const RegistrationModal = ({ isOpen, onClick }: SignUpModalProps) => {
  const theme = useTheme();

  return (
    <Dialog open={isOpen}>
      <DialogContent sx={{ padding: 0 }}>
        <Stack sx={{ padding: 6, background: theme.palette.gradientGrey }}>
          <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" mb={3}>
            <Stack direction="row" alignItems="center">
              <LogoIcon />
              <Typography fontWeight={900} fontSize={25} component="h2">
                Join Kinohub
              </Typography>
            </Stack>
            <CloseIcon cursor="pointer" onClick={() => onClick(false)} />
          </Stack>
          <Typography>Create your account to start tracking movies</Typography>
        </Stack>
        <Stack sx={{ padding: 6, background: 'transparent' }}>
          <SignUpForm />
        </Stack>
      </DialogContent>
      <Typography>Already have an account? Sign in</Typography>
    </Dialog>
  );
};

export default RegistrationModal;
