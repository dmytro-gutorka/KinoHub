import { Stack, useTheme } from '@mui/material';
import LogoutButton from '@features/auth/ui/LogoutButton';
import RegistrationModal from '@features/auth/ui/RegistrationModal';
import LoginModal from '@features/auth/ui/LoginModal';

function Header() {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="end"
      bgcolor={theme.palette.accentBgBlack}
      borderBottom={theme.border}
      py={4.5}
      gap={3}
      paddingInline={10}
    >
      <RegistrationModal />
      <LoginModal />
      <LogoutButton />
    </Stack>
  );
}

export default Header;
