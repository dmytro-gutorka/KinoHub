import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { SortBy } from '@shared/types/generalTypes';

interface BasicSelectProps {
  sortBy: SortBy;
  onSortChange: (e: any) => void;
}

const BasicSelect = ({ sortBy, onSortChange }: BasicSelectProps) => {
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
        <MenuItem value={SortBy.TitleASC}>Title</MenuItem>
        <MenuItem value={SortBy.RatingDESC}>Rating</MenuItem>
        <MenuItem value={SortBy.YearDESC}>Year</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
