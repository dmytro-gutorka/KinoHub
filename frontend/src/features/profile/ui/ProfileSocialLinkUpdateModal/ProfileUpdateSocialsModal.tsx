import { Modal } from '@shared/ui/Modal';
import { Stack, Typography } from '@mui/material';
import ProfileSocialLinksUpdateForm from '@features/profile/ui/ProfileSocialLinksUpdateForm';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function ProfileUpdateSocialsModal() {
  return (
    <Modal>
      <Modal.Open asChild>
        <Stack direction="row" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
          <EditOutlinedIcon sx={{ fontSize: 18 }} />
          <Typography variant="body1">Edit</Typography>
        </Stack>
      </Modal.Open>
      <Modal.Container>
        <Modal.Header>Social Links</Modal.Header>
        <Modal.Content>
          <ProfileSocialLinksUpdateForm />
        </Modal.Content>
      </Modal.Container>
    </Modal>
  );
}
