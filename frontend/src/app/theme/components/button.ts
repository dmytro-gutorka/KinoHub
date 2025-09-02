import { Components, Theme } from '@mui/material';

export const MuiButton = (theme: Theme) => ({
  styleOverrides: {
    root: {
      variants: [
        {
          props: {
            variant: 'transparent-square',
          },
          style: {
            minWidth: '36.5px',
            maxWidth: '36.5px',
            height: '36.5px',
            backgroundColor: 'rgba(33, 33, 33, 0.5)',
            color: theme.palette.common.white,
          },
        },
      ],
      color: theme.palette.common.white,
      background: theme.palette.gradientGrey,
      padding: theme.spacing(2.5),
      paddingInline: theme.spacing(4),
      textTransform: 'capitalize',
      fontWeight: '900',
      fontSize: theme.spacing(3.75),
      transition: theme.transitions.create('all'),

      '&:hover' : {
        scale: 1.05,
        filter: 'brightness(1.2)'

      }
    },
  },
})