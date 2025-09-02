import { Theme } from '@mui/material';

export const MuiTypography = (theme: Theme)=> ({
  styleOverrides: {
    root: {
      variants: [
        {
          props: {
            variant: 'h1',
          },
          style: {
            fontSize: theme.spacing(17),
            fontWeight: '900',
            color: theme.palette.common.white,
          },
        },
        {
          props: {
            variant: 'h2',
          },
          style: {
            fontWeight: '100',
            color: 'red'
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontWeight: '100',
            color: 'red'
          },
        }
      ]
    },
  }
})