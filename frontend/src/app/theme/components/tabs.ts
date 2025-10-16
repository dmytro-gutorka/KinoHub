import { Theme } from '@mui/material';

export const MuiTabs = (theme: Theme) => ({
  styleOverrides: {
    scroller: {
      position: 'relative',
      '&::after': {
        position: 'absolute',
        content: '""',
        borderBottom: '2px solid rgba(255, 255, 255, 0.7)',
        width: '100%',
        bottom: 0,
        zIndex: -1,
      },
    },
    root: {
      flexGrow: 1,
      '& .Mui-selected.Mui-selected': {
        color: 'white',
      },
      '& .MuiButtonBase-root.MuiTab-root': {
        flexGrow: 1,
        paddingInline: 100,
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
