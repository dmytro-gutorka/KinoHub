import { Button } from '@mui/material';

import { selectIsAuthenticated } from '@features/auth/selectors';
import { useAppSelector } from '@shared/hooks/redux';
import { Modal } from '@shared/ui/Modal';
import LoginForm from './LoginForm';
import LogoIcon from '@shared/icons/LogoIcon';
import LoginIcon from '@mui/icons-material/Login';

export default function LoginModal() {
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open asChild>
            <Button startIcon={<LoginIcon />} variant="outlined">
              Log In
            </Button>
          </Modal.Open>
          <Modal.Container>
            <Modal.Header subTitle="Sign in to continue your movie journey" icon={<LogoIcon />}>
              Welcome Back
            </Modal.Header>
            <Modal.Content>
              <LoginForm />
            </Modal.Content>
          </Modal.Container>
        </Modal>
      )}
    </>
  );
}
