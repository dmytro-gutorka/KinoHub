import { Box, Slider, Typography } from '@mui/material';

const SliderBar = ({ minRating, onRatingChange }) => {
  return (
    <Box sx={{ width: 250 }}>
      <Typography>Average rating</Typography>
      <Slider
        step={0.5}
        value={minRating}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        onChange={(e) => onRatingChange(e.target.value)}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2" onClick={() => onRatingChange(0)} sx={{ cursor: 'pointer' }}>
          0 min
        </Typography>
        <Typography variant="body2" onClick={() => onRatingChange(10)} sx={{ cursor: 'pointer' }}>
          10 max
        </Typography>
      </Box>
    </Box>
  );
};

export default SliderBar;
