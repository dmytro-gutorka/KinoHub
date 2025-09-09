import { Theme } from '@mui/material';

export const MuiTypography = (theme: Theme) => ({
  styleOverrides: {
    root: {
      variants: [
        {
          props: {
            variant: 'body1',
          },
          style: {
            color: theme.palette.grey[400],
            fontSize: theme.spacing(4),
          },
        },
        {
          props: {
            variant: 'body2',
          },
          style: {
            color: theme.palette.common.white,
            fontSize: theme.spacing(5),
          },
        },
        {
          props: {
            variant: 'subtitle1',
          },
          style: {
            color: theme.palette.common.white,
            fontSize: theme.spacing(4.5),
            fontWeight: '600',
          },
        },
        {
          props: {
            variant: 'subtitle2',
          },
          style: {
            color: theme.palette.grey[600],
            fontSize: theme.spacing(4),
            fontWeight: '300',
          },
        },
        {
          props: {
            variant: 'h1',
          },
          style: {
            fontSize: theme.spacing(18),
            fontWeight: '600',
          },
        },
        {
          props: {
            variant: 'h2',
          },
          style: {
            fontSize: theme.spacing(15),
            fontWeight: '600',
          },
        },
        {
          props: {
            variant: 'h3',
          },
          style: {
            fontSize: theme.spacing(12),
            fontWeight: '600',
          },
        },
        {
          props: {
            variant: 'h4',
          },
          style: {
            fontSize: theme.spacing(9),
            fontWeight: '600',
          },
        },
        {
          props: {
            variant: 'h5',
          },
          style: {
            fontSize: theme.spacing(6),
            fontWeight: '900',
            lineHeight: '2',
          },
        },
      ],
    },
  },
});
