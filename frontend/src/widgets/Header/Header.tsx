import { Stack } from '@mui/material';

import RegistrationModal from '@features/auth/ui/RegistrationModal';
import LoginModal from '@features/auth/ui/LoginModal';
import LogoutButton from '@features/auth/ui/LogoutButton';

function Header() {
  return (
    <Stack direction="row" py={5} mx={10} justifyContent="end" gap={3}>
      <RegistrationModal />
      <LoginModal />
      <LogoutButton />
    </Stack>
  );
}

export default Header;
