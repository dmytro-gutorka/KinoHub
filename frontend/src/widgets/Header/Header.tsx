import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button, Stack } from '@mui/material';
import { useState } from 'react';

import SignUpModal from '@features/auth/signUp/ui/SignUpModal';

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack direction="row" py={5} mx={10} justifyContent="end" gap={3}>
      <Button onClick={() => setOpen(true)}>
        <LoginIcon fontSize="small" sx={{ marginRight: 1 }} />
        Sign In
      </Button>
      <Button>
        <PersonAddAltOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
        Sign Up
      </Button>

      <SignUpModal isOpen={open} />
    </Stack>
  );
}

export default Header;
