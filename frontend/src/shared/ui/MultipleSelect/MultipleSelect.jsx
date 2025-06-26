import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const MultipleSelect = ({ genres, onGenresChange, mediaGenres }) => {
  return (
    <FormControl sx={{ width: '300px' }}>
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
        {mediaGenres.map((movie) => (
          <MenuItem key={movie.id} value={movie}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
