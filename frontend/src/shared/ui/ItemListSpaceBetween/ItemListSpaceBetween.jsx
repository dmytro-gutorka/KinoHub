import { ListItem, styled } from '@mui/material';

const StyledListItem = styled(ListItem)(() => ({
  display: 'flex',
  justifyContent: 'space-between'
}))

const ItemListSpaceBetween = ({ label, data }) => {
  return (
      <StyledListItem>
        <span>{label}</span>
        <span>{data}</span>
      </StyledListItem>
  )
};

export default ItemListSpaceBetween;