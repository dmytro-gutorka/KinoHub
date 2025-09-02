import { Theme } from '@mui/material';

export const MuiTab = (theme: Theme) => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(6),
      borderRadius: theme.shape.borderRadiusScale.xl,
      textTransform: 'capitalize',
      fontWeight: '900',
      letterSpacing: theme.spacing(0.1),
      fontSize: theme.spacing(4),
      height: '20px',
      minHeight: '20px',

      '&.Mui-selected': {
        background: theme.palette.gradientGrey,
        fontWeight: '900',
        color: 'white',
      },
      '&:not(.Mui-selected):hover': {
        background: theme.palette.transparentGrey,
      },
    },
  }
})