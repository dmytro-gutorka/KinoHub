import { ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material';
import { MediaPrimaryDetailsItem } from '@features/media/types/mediaTypes';

const MediaItemList = ({ label, data, icon }: MediaPrimaryDetailsItem) => {
  return (
    <ListItem secondaryAction={<ListItemText>{data}</ListItemText>}>
      <Stack direction="row" alignItems="center" justifyContent="start">
        <ListItemIcon sx={{ minWidth: '40px' }}>{icon}</ListItemIcon>
      </Stack>
      <ListItemText sx={{ display: 'inline-block', color: 'white' }}>{label}</ListItemText>
    </ListItem>
  );
};

export default MediaItemList;
