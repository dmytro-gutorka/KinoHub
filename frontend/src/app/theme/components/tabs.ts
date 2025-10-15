import { Theme } from '@mui/material';

export const MuiTabs = (theme: Theme) => ({
  styleOverrides: {
    root: {
      flexGrow: 1,
      '& .Mui-selected.Mui-selected': {
        color: 'white',
      },
      '& .MuiButtonBase-root.MuiTab-root': {
        flexGrow: 1,
      },
      '.MuiTabs-indicator': {
        background: 'white',
      },
      '.MuiTabs-flexContainer': {
        justifyContent: 'space-between',
      },
    },
  },
});
