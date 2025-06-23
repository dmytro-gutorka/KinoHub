import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    transparentGrey: 'rgb(255 255 255 / 0.1)',
    gradientMidnightSpace: 'linear-gradient(to bottom right, #000000, #0f172a, #000000)'

  },
  spacing: 4,
});

const finalTheme = createTheme(theme, {
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
