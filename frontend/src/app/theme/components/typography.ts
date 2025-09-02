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
            fontSize: theme.spacing(16),
            fontWeight: '900',
          },
        },
        {
          props: {
            variant: 'h2',
          },
          style: {
            fontWeight: '900',
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontWeight: '100',
          },
        }
      ]
    },
  }
})



// const thenable: PromiseLike<number> = {
//   then: (onfulfilled) => ()
// }