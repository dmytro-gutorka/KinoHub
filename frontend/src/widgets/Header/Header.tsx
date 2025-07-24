import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import SignUpModal from '@features/auth/ui/RegistrationModal';
import LoginModal from '@features/auth/ui/LoginModal';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { logout } from '@features/auth/model/services/logout';
import { selectIsAuthenticated } from '@features/auth/model/selectors';

function Header() {
  const [openSignUpModal, setOpenRegistrationModal] = useState<boolean>(false);
  const [openSignInModal, setOpenLoginModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <Stack direction="row" py={5} mx={10} justifyContent="end" gap={3}>
      {!isAuthenticated && (
        <Button onClick={() => setOpenLoginModal(true)}>
          <PersonAddAltOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
          Sign In
        </Button>
      )}

      {!isAuthenticated && (
        <Button onClick={() => setOpenRegistrationModal(true)}>
          <LoginIcon fontSize="small" sx={{ marginRight: 1 }} />
          Sign Up
        </Button>
      )}

      {isAuthenticated && <Button onClick={() => dispatch(logout())}>Logout</Button>}

      <SignUpModal isOpen={openSignUpModal} setOpenRegistrationModal={setOpenRegistrationModal} />
      <LoginModal isOpen={openSignInModal} setOpenLoginModal={setOpenLoginModal} />
    </Stack>
  );
}

export default Header;
