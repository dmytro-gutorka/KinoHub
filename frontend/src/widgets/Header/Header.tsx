import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import SignUpModal from '@features/auth/signUp/ui/SignUpModal';
import SignInModal from '@features/auth/signIn/ui/SignInModal';

function Header() {
  const [openSignUpModal, setOpenSignUpModal] = useState<boolean>(false);
  const [openSignInModal, setOpenSignInModal] = useState<boolean>(false);

  return (
    <Stack direction="row" py={5} mx={10} justifyContent="end" gap={3}>
      <Button onClick={() => setOpenSignInModal(true)}>
        <PersonAddAltOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
        Sign In
      </Button>

      <Button onClick={() => setOpenSignUpModal(true)}>
        <LoginIcon fontSize="small" sx={{ marginRight: 1 }} />
        Sign Up
      </Button>

      <SignUpModal isOpen={openSignUpModal} onClick={setOpenSignUpModal} />
      <SignInModal isOpen={openSignInModal} onClick={setOpenSignInModal} />
    </Stack>
  );
}

export default Header;
