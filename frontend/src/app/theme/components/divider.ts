import { Theme } from '@mui/material';

export const MuiDivider = (theme: Theme) => ({
  styleOverrides: {
    root: {
      borderColor: theme.palette.transparentGrey,
      opacity: 0.9,
      height: 2,
    },
  }
})