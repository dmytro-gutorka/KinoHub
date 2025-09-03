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
          }
        },
        {
          props: {
            variant: 'outlined',
          },
          style: {
            color: theme.palette.common.white,
            border: `1px solid ${theme.palette.transparentGrey}`
          }
        }
      ],

      transition: theme.transitions.create('all'),
      padding: theme.spacing(2.5),
      paddingInline: theme.spacing(4.5),
      textTransform: 'capitalize',
      fontWeight: '600',
      fontSize: theme.spacing(4),
      minHeight: '55px',

      '&:hover' : {
        scale: 1.05,
        filter: 'brightness(1.2)'
      }
    },
  },
})