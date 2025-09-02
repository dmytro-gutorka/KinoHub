import { Theme } from '@mui/material';

export const MuiTabs = (theme: Theme) => ({
  styleOverrides: {
    root: {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(6),
      '.MuiTabs-scroller': {
        position: 'static',
      },
      '.MuiTabs-list': {
        gap: theme.spacing(2),
      },
      '.MuiTabs-indicator': {
        height: '0px'
      },
    },
  }
})