import { ListItem } from '@mui/material';

const ItemListSpaceBetween = ({ label, data }) => {
  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>{label}</span>
      <span>{data}</span>
    </ListItem>
  );
};

export default ItemListSpaceBetween;
