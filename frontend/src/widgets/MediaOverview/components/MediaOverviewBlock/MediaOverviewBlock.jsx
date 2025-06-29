import { Box, Typography, useTheme } from '@mui/material';

const MediaOverviewBlock = ({ overview }) => {
  const theme = useTheme();

  return (
    <Box borderRadius={2.5} padding={4} border={theme.customComponents.border}>
      <Typography variant="h5" component="h3">
        Plot
      </Typography>
      <Typography variant="body1" component="p">
        {overview}
      </Typography>
    </Box>
  );
};

export default MediaOverviewBlock;
