import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface MultipleSelectProps {
  genres: Array<TmdbGenre>;
  onGenresChange: (event: SelectChangeEvent<Array<TmdbGenre>>) => void;
  genresList: Array<TmdbGenre>;
}

const MultipleSelect = ({ genres, onGenresChange, genresList }: MultipleSelectProps) => {
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
        {genresList.map((movie) => (
          <MenuItem key={movie.id} value={movie}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
