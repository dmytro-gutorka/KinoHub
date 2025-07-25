import { Box, Slider, Typography } from '@mui/material';
import { ChangeEvent } from 'react';

interface SliderBarProps {
  minRating: number;
  onRatingChange: (rating: number) => void;
}

const SliderBar = ({ minRating, onRatingChange }: SliderBarProps) => {
  return (
    <Box width="300px">
      <Typography>Average rating</Typography>
      <Slider
        step={0.5}
        value={minRating}
        valueLabelDisplay="auto"
        min={0}
        max={10}
        // @ts-ignore
        onChange={(e: ChangeEvent<HTMLInputElement>) => onRatingChange(Number(e.target.value))}
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
