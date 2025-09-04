import { FormControl, InputLabel, MenuItem, NativeSelect, OutlinedInput, Select } from '@mui/material';

interface BasicSelectProps {
  value: string | number | boolean;
  label: string;
  onChange: (e: React.ChangeEvent<{ value: any}>) => void;
  staticValueList: Record<string, string | number>;
}


const BasicSelect = ({ staticValueList, value, onChange, label }: BasicSelectProps) => {

  const labelId: string = label.split(' ').join('-').toLowerCase() + '-label'
  const selectId: string = label.split(' ').join('-').toLowerCase()  + '-select'


  return (
    <FormControl>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        id={selectId}
        labelId={labelId}
        value={value}
        onChange={onChange}
        input={<OutlinedInput id={selectId}
        />}
        defaultValue={value}
      >
        {Object.entries(staticValueList).map(([k, v]) =>
          <MenuItem value={v}>{k}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
