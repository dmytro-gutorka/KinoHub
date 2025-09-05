import { Stack } from '@mui/material';
import { useAppSelector } from '@shared/hooks/redux';
import { selectIsAuthenticated } from '@features/auth/model/selectors';
import { Modal } from '@shared/providers/ModalProvider/ModalProvider';
import LoginForm from './LoginForm';
import LogoIcon from '@shared/icons/LogoIcon';

export default function LoginButton() {

  const isAuthenticated: boolean = useAppSelector(selectIsAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <Modal>
          <Modal.Open/>

          <Modal.Container>
            <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
              <Modal.Title icon={<LogoIcon />}>
                Welcome Back 3423 423 423 42 342 34 fd fsd fsd fsf fs
              </Modal.Title>
              <Modal.Close />
            </Stack>
            <Modal.Content>
              <LoginForm />
            </Modal.Content>
          </Modal.Container>

        </Modal>
      )}
    </>
  )
}
