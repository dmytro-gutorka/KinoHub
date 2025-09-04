import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import LoginModal from './LoginModal';

export default function LoginButton() {
  const [openSignInModal, setOpenLoginModal] = useState<boolean>(false);

  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated &&
        <Button
          onClick={() => setOpenLoginModal(true)}
          startIcon={<PersonAddAltOutlinedIcon />}
          children="Login"
        />
      }
      <LoginModal isOpen={openSignInModal} onClose={() => setOpenLoginModal(false)} />
    </>
  );
}
