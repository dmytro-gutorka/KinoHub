import { Theme } from '@mui/material';

export const MuiOutlinedInput = (theme: Theme) => ({
  styleOverrides: {
    // input: {
    // minHeight: '100px',
    // borderRadius: 5,
    // padding: 20,
    // border: `1px solid ${theme.palette.grey[100]}`,
    // },
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
