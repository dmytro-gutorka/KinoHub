import { useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import { Modal } from '@shared/ui/Modal';
import LoginForm from './LoginForm';
import LogoIcon from '@shared/icons/LogoIcon';

export default function LoginModal() {
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open />
          <Modal.Container>
            <Modal.Title icon={<LogoIcon />}>
              Welcome Back 3423 423 423 42 342 34 fd fsd fsd fsf fs
            </Modal.Title>
            <Modal.Close />
            <Modal.Content>
              <LoginForm />
            </Modal.Content>
          </Modal.Container>
        </Modal>
      )}
    </>
  );
}

// button text
// caption text
// overline text

// button text
// caption text
// overline text