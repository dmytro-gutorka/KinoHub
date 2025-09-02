import { Theme } from '@mui/material';

export const MuiCardContent = (theme: Theme) => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(4),
      '&:last-child': {
        paddingBottom: '0px',
      },
      '&.MuiCardContent-root': {
        paddingBottom: theme.spacing(4),
      },
    },
  }
})