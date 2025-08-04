import { Box } from '@mui/material';

const BackgroundBanner = ({ imgURL }: { imgURL: string }) => {
  return (
    <Box
      sx={{
        background: `url(${imgURL})`,
        position: 'absolute',
        inset: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: '-10',
      }}
    />
  );
};

export default BackgroundBanner;
