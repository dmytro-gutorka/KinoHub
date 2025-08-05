import { ListItem } from '@mui/material';

interface MediaItemListProps {
  label: string;
  data: string | number;
}

const MediaItemList = ({ label, data }: MediaItemListProps) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{label}</span>
      <span>{data}</span>
    </ListItem>
  );
};

export default MediaItemList;
