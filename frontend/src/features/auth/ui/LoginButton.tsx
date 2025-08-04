import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { setStateRequest } from '@features/auth/model/slice';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import LoginModal from './LoginModal';

export default function LoginButton() {
  const [openSignInModal, setOpenLoginModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  function handleOpenLoginModal(): void {
    setOpenLoginModal(true);
    dispatch(setStateRequest('auth/login'));
  }

  return (
    <>
      {!isAuthenticated && (
        <Button onClick={handleOpenLoginModal}>
          <PersonAddAltOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />
          Login
        </Button>
      )}
      <LoginModal isOpen={openSignInModal} onClick={setOpenLoginModal} />
    </>
  );
}
