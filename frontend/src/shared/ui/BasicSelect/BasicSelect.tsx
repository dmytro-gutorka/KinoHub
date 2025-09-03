import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';

interface BasicSelectProps {
  value: string | number | boolean;
  label: string;
  onChange: () => void;
  staticValueList: Record<string, string | number>;
}


const BasicSelect = ({ staticValueList, value, onChange, label }: BasicSelectProps) => {

  const ariaId: string = label.split(' ').join('-')

  return (
    <FormControl sx={{ width: '300px' }}>
      <InputLabel id={ariaId}>{label}</InputLabel>
      <Select
        defaultValue={value}
        onChange={onChange}
        labelId={ariaId}
        value={value}
        input={<OutlinedInput />}
      >
        {Object.entries(staticValueList).map(([k, v]) =>
          <MenuItem value={v}>{k}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
