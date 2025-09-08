import { Theme } from '@mui/material';

export const MuiOutlinedInput = (theme: Theme) => ({
  styleOverrides: {
    notchedOutline: {
      borderColor: theme.palette.transparentGrey02,
    },
    root: {
      padding: 0,
      color: 'white',
      minHeight: '55px',
      minWidth: '300px',
    },
  },
});
