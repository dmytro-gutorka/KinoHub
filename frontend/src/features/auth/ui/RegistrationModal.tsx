import { Stack } from '@mui/material';
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
          <Modal.Open />
          <Modal.Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
              <Modal.Title icon={<LogoIcon />}>Join Kinohub</Modal.Title>
              <Modal.Close />
            </Stack>
            <Modal.Content>
              <RegistrationForm />
            </Modal.Content>
          </Modal.Container>
        </Modal>
      )}
    </>
  );
}
