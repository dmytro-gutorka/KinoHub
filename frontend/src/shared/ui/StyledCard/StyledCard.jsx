import Card from '@mui/material/Card';

const StyledCard = ({ children, width }) => {
  return (
    <Card
      sx={(theme) => ({
        background: 'transparent',
        position: 'relative',
        width: width,
        border: `1px solid ${theme.palette.transparentGrey}`,
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      })}
    >
      {children}
    </Card>
  );
};

export default StyledCard;
