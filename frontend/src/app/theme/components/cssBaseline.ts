import { Theme } from '@mui/material';

export const MuiCssBaseline = (theme: Theme) => ({
  styleOverrides: {
    ul: {
      padding: '0px',
      margin: '0px',
    },
    body: {
      background: theme.palette.gradientMidnightSpace,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
    },
  }
})