import { Theme } from '@mui/material';

export const MuiButton = (theme: Theme) => ({
  styleOverrides: {
    root: {
      variants: [
        {
          props: {
            variant: 'contained',
          },
          style: {
            color: theme.palette.common.white,
            background: theme.palette.gradientGrey,
            fontWeight: 900,
          },
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.grey[400]}`,
            minHeight: 35,
            padding: theme.spacing(2.5),
            fontSize: 16,
          },
        },
      ],

      padding: theme.spacing(2.5),
      paddingInline: theme.spacing(4.5),
      textTransform: 'capitalize',
      borderRadius: theme.shape.borderRadiusScale.xl,
      minHeight: '50px',
      fontWeight: '600',
      fontSize: theme.spacing(4),
      transition: theme.transitions.create('all'),

      '&:hover': {
        scale: 1.05,
        filter: 'brightness(1.2)',
      },
    },
  },
  defaultProps: {
    variant: 'contained',
  },
});
