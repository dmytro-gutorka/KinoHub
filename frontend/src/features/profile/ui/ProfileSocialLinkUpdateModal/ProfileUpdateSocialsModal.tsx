import { Modal } from '@shared/ui/Modal';
import { Stack, Typography, useTheme } from '@mui/material';
import ProfileSocialLinksUpdateForm from '@features/profile/ui/ProfileSocialLinksUpdateForm';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function ProfileUpdateSocialsModal() {
  const theme = useTheme();

  return (
    <Modal>
      <Modal.Open asChild>
        <Stack direction="row" alignItems="center" gap={1} sx={{ cursor: 'pointer' }}>
          <EditOutlinedIcon sx={{ fontSize: 16, color: theme.palette.grey[500] }} />
          <Typography variant="subtitle1" color={theme.palette.grey[400]}>
            Edit
          </Typography>
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
