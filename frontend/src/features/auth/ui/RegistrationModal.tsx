import { Button } from '@mui/material';
import { useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/selectors';
import { Modal } from '@shared/ui/Modal';
import LogoIcon from '@shared/icons/LogoIcon';
import RegistrationForm from './RegistrationForm';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function RegistrationModal() {
  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open asChild>
            <Button startIcon={<PersonAddOutlinedIcon />} variant="outlined">
              Sign up
            </Button>
          </Modal.Open>
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
