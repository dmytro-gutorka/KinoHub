import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import movieGenres from '../../../features/movies/data/movieGenres';

const MultipleSelect = ({ genres, onGenresChange }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="movie-genres-filter">Genres</InputLabel>
      <Select
        multiple
        labelId="movie-genres-filter"
        value={genres}
        variant="standard"
        onChange={onGenresChange}
        input={<OutlinedInput label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value.id} label={value.name} />
            ))}
          </Box>
        )}
      >
        {movieGenres.map((movie) => (
          <MenuItem key={movie.id} value={movie}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
