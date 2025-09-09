import { Theme } from '@mui/material';

export const MuiOutlinedInput = (theme: Theme) => ({
  styleOverrides: {
    inputMultiline: {
      padding: theme.spacing(4),
    },
    notchedOutline: {
      borderColor: theme.palette.grey[500],
    },
    root: {
      padding: 0,
      color: 'white',
      minHeight: '55px',
      minWidth: '300px',
    },
  },
});
