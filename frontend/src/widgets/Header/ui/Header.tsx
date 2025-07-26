import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import LoginModal from '@features/auth/ui/LoginModal';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { logout } from '@features/auth/model/services/logout';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import RegistrationModal from '@features/auth/ui/RegistrationModal';
import { setStateRequest } from '@features/auth/model/slice';

function Header() {
  const [openSignUpModal, setOpenRegistrationModal] = useState<boolean>(false);
  const [openSignInModal, setOpenLoginModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  function handleOpenRegistrationModal() {
    setOpenRegistrationModal(true);
    dispatch(setStateRequest('auth/register'));
  }

  function handleOpenLoginModal() {
    setOpenLoginModal(true);
    dispatch(setStateRequest('auth/login'));
  }

  return (
    <Stack direction="row" py={5} mx={10} justifyContent="end" gap={3}>
      {!isAuthenticated && (
        <Button onClick={handleOpenLoginModal}>
          <PersonAddAltOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
          Login
        </Button>
      )}

      {!isAuthenticated && (
        <Button onClick={handleOpenRegistrationModal}>
          <LoginIcon fontSize="small" sx={{ marginRight: 1 }} />
          Sign Up
        </Button>
      )}

      {isAuthenticated && <Button onClick={() => dispatch(logout())}>Logout</Button>}

      <RegistrationModal
        isOpen={openSignUpModal}
        setOpenRegistrationModal={setOpenRegistrationModal}
      />
      <LoginModal isOpen={openSignInModal} setOpenLoginModal={setOpenLoginModal} />
    </Stack>
  );
}

export default Header;
