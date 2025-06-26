import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

const BasicSelect = ({ sortBy, onSortChange }) => {
  return (
    <FormControl sx={{ width: '300px' }}>
      <InputLabel id="sort-by-label">Sort by</InputLabel>
      <Select
        labelId="sort-by-label"
        variant="standard"
        value={sortBy}
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
