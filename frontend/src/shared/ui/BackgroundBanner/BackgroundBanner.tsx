import { Box } from '@mui/material';

const BackgroundBanner = ({ imgURL }: { imgURL: string }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: -10,
        inset: 0,
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0,0,0,0) 20%,
            rgba(0,0,0,0.7) 50%,
            rgba(0,0,0,0) 80%
          ),
          url(${imgURL})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(8px)",
      }}
    />
  );
};

export default BackgroundBanner;
