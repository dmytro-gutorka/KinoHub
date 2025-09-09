import { Theme } from '@mui/material';

export const MuiTab = (theme: Theme) => ({
  styleOverrides: {
    root: {
      padding: theme.spacing(7),
      borderRadius: theme.shape.borderRadiusScale.xl,
      textTransform: 'capitalize',
      fontWeight: '900',
      letterSpacing: theme.spacing(0.1),
      fontSize: theme.spacing(4),
      height: '25px',
      minHeight: '25px',
      background: theme.palette.transparentGrey01,

      '&.Mui-selected': {
        background: theme.palette.gradientGrey,
        fontWeight: '900',
        color: 'white',
      },
      '&:not(.Mui-selected):hover': {
        background: theme.palette.transparentGrey01,
      },
    },
  },
});
