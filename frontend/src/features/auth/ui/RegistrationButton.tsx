import { setStateRequest } from '@features/auth/model/slice';
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import RegistrationModal from './RegistrationModal';

export default function RegistrationButton() {
  const [openRegistrationModal, setOpenRegistrationModal] = useState<boolean>(false);

  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  function handleOpenRegistrationModal(): void {
    setOpenRegistrationModal(true);
    dispatch(setStateRequest('auth/register'));
  }

  return (
    <>
      {!isAuthenticated && (
        <Button onClick={handleOpenRegistrationModal}>
          <LoginIcon fontSize="small" sx={{ marginRight: 1 }} />
          Sign Up
        </Button>
      )}
      <RegistrationModal isOpen={openRegistrationModal} onClick={setOpenRegistrationModal} />
    </>
  );
}
