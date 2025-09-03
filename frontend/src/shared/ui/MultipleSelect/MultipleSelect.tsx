import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { TmdbGenre } from '@entities/types/tmdbEntities';

interface MultipleSelectProps {
  onChange: (event: SelectChangeEvent<Array<TmdbGenre>>) => void;
  staticValueList: any[];
  selectedValueList: any[];
}

const MultipleSelect = ({ staticValueList, selectedValueList, onChange }: MultipleSelectProps) => {
  return (
    <FormControl>
      <InputLabel id="movie-genres-filter">Genres</InputLabel>
      <Select
        multiple
        labelId="movie-genres-filter"
        value={selectedValueList}
        onChange={onChange}
        input={<OutlinedInput label="Chip" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value.id} label={value.name} />
            ))}
          </Box>
        )}
      >
        {staticValueList.map((movie) => (
          <MenuItem key={movie.id} value={movie}>
            {movie.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultipleSelect;
