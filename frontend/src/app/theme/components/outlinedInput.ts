import { Theme } from '@mui/material';

export const MuiOutlinedInput = (theme: Theme) => ({
  styleOverrides: {
    root: {
      minHeight: '55px',
      minWidth: '300px',
      borderColor: 'red',

      '&.MuiNotchedOutlined-root': {
        borderColor: 'red',
        border: '1px solid red'

      }
    }
  }
})