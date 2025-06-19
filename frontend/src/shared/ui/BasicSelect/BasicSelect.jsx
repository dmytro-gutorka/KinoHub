import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const BasicSelect = ({ sortBy, onSortChange }) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="movie-sort-by">Sort by</InputLabel>
      <Select
        labelId="movie-sort-by"
        value={sortBy}
        variant="standard"
        onChange={onSortChange}
        input={<OutlinedInput />}
      >
        <MenuItem value="title.asc">Title</MenuItem>
        <MenuItem value="vote_average.desc">Rating</MenuItem>
        <MenuItem value="primary_release_date.desc">Year</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
