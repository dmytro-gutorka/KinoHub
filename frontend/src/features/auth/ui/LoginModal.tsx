import { selectIsAuthenticated } from '@features/auth/model/selectors';
import { useAppSelector } from '@shared/hooks/redux';
import { Modal } from '@shared/ui/Modal';
import LoginForm from './LoginForm';
import LogoIcon from '@shared/icons/LogoIcon';

export default function LoginModal() {
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open label="Log in" />
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
