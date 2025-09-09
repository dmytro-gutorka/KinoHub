import { Theme } from '@mui/material';

export const MuiTabs = (theme: Theme) => ({
  styleOverrides: {
    root: {
      // backgroundColor: 'red',
      borderRadius: theme.shape.borderRadiusScale.xl,
      // padding: theme.spacing(1),
      margin: theme.spacing(3),
      '.MuiTabs-scroller': {
        position: 'static',
      },
      '.MuiTabs-list': {
        gap: theme.spacing(2),
      },
      '.MuiTabs-indicator': {
        height: '0px',
      },
    },
  },
});
