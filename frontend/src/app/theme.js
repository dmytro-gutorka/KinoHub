import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    transparentGrey: 'rgb(255 255 255 / 0.1)',
    gradientMidnightSpace: 'linear-gradient(to bottom right, #000000, #0f172a, #000000)',
    gradientGrey: 'linear-gradient(356deg,rgba(71, 85, 105, 1) 0%, rgba(75, 85, 99, 1) 21%, rgba(71, 85, 105, 1) 100%)'
  },
  spacing: 4,
});

const finalTheme = createTheme(theme, {
  customComponents: {
    border: `1px solid ${theme.palette.transparentGrey}`
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ul: {
          padding: '0px',
          margin: '0px',
        },
        body: {
          backgroundColor: theme.palette.transparentGrey
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          opacity: 0.3,
          borderColor: theme.palette.transparentGrey,
          height: 2,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiButton: {
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
          fontSize: theme.spacing(3.75)
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  props: {
    MuiTable: {
      size: 'small',
    },
  },
});

export default finalTheme;
