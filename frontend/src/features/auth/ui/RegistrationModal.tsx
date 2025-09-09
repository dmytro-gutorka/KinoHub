import { useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import { Modal } from '@shared/ui/Modal';
import LogoIcon from '@shared/icons/LogoIcon';
import RegistrationForm from './RegistrationForm';

export default function RegistrationModal() {
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open label="Sign up" />
          <Modal.Container>
            <Modal.Header subTitle="Sign up to start your movie journey" icon={<LogoIcon />}>
              Join Kinohub
            </Modal.Header>
            <Modal.Content>
              <RegistrationForm />
            </Modal.Content>
          </Modal.Container>
        </Modal>
      )}
    </>
  );
}
