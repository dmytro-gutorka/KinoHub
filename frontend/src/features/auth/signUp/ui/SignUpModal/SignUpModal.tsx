import Dialog from '@mui/material/Dialog';
import { DialogContent, Stack, Typography, useTheme } from '@mui/material';
import LogoIcon from '@shared/icons/LogoIcon';
import SignUpForm from '@features/auth/signUp/ui/SignUpForm';

interface SignUpModalProps {
  isOpen: boolean;
}

function SignUpModal({ isOpen }: SignUpModalProps) {
  const theme = useTheme();

  return (
    <Dialog open={isOpen}>
      <DialogContent sx={{ padding: 0 }}>
        <Stack sx={{ padding: 6, background: theme.palette.gradientGrey }}>
          <Stack direction="row" gap={2} alignItems="center" mb={3}>
            <LogoIcon />
            <Typography fontWeight={900} fontSize={25} component="h2">
              Welcome Back
            </Typography>
          </Stack>
          <Typography>Sign in to continue your movie journey</Typography>
        </Stack>
        <Stack>
          <SignUpForm />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default SignUpModal;
