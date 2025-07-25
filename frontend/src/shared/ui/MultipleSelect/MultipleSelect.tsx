import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { Genres } from '@shared/types/generalTypes';

interface MultipleSelectProps {
  genres: Genres[];
  onGenresChange: (event: SelectChangeEvent<Genres[]>) => void;
  mediaGenresList: Genres[];
}

const MultipleSelect = ({ genres, onGenresChange, mediaGenresList }: MultipleSelectProps) => {
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
        {mediaGenresList.map((movie) => (
          // @ts-ignore
          <MenuItem key={movie.id} value={movie}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
