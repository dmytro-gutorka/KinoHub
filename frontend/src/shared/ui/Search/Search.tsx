import { TextField, useTheme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchProps {
  onChange: (value: string) => void;
  search: string;
}

export default function Search({ onChange, search }: SearchProps) {
  const theme = useTheme();

  return (
    <>
      <TextField
        onChange={(e) => onChange(e.target.value)}
        value={search}
        placeholder="Search"
        sx={{ '& ::placeholder': { color: theme.palette.grey['50'] } }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={{ paddingLeft: 2 }}>
                <SearchIcon sx={{ color: theme.palette.grey.A400 }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  );
}
