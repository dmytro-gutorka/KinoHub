import { ListItem } from '@mui/material';

interface MediaItemListProps {
  label: string;
  data: string | number;
}

const MediaItemList = ({ label, data }: MediaItemListProps) => {
  return (
    <ListItem secondaryAction={<ListItemText>Release date</ListItemText>}>
      <Stack direction="row" alignItems="center" justifyContent="start">
        <ListItemIcon sx={{ minWidth: '40px' }}>
          <FolderIcon />
        </ListItemIcon>
      </Stack>
      <ListItemText sx={{ display: 'inline-block' }}>{releaseDate}</ListItemText>
    </ListItem>
  );
};

export default MediaItemList;
