import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '36.5px',
  maxWidth: '36.5px',
  height: '36.5px',
  backgroundColor: theme.palette.customColors.lightTransparent,
  color: theme.palette.customColors.light,
}));

const SquareTransparentButton = (props) => <StyledButton {...props}></StyledButton>;

export default SquareTransparentButton;
