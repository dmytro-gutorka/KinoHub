import { Button } from '@mui/material';
import { Modal } from '@shared/ui/Modal';
import ProfileUpdateForm from '@features/profile/ui/ProfileUpdateForm';

export default function ProfileUpdateModal() {
  return (
    <Modal>
      <Modal.Open asChild>
        <Button sx={{ flexBasis: 300 }}>Edit Profile</Button>
      </Modal.Open>
      <Modal.Container>
        <Modal.Header>Edit Profile</Modal.Header>
        <Modal.Content>
          <ProfileUpdateForm />
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
}
