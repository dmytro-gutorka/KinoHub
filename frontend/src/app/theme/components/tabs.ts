import { Theme } from '@mui/material';

export const MuiTabs = (theme: Theme) => ({
  styleOverrides: {
    root: {
      borderRadius: theme.shape.borderRadiusScale.xl,
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
