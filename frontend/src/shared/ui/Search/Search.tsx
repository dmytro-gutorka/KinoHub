import { TextField } from '@mui/material';

interface SearchProps {
  onChange: (value: string) => void;
  search: string;
}

export default function Search({ onChange, search }: SearchProps) {
  return <TextField label="Search" onChange={(e) => onChange(e.target.value)} value={search} />;
}
