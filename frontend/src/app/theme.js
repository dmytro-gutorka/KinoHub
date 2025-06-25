import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    transparentGrey: 'rgb(255 255 255 / 0.1)',
    gradientMidnightSpace: 'linear-gradient(to bottom right, #000000, #0f172a, #000000)',
    gradientGrey: 'linear-gradient(to right, #475569, #4b5563)',
    gradientOrange: 'linear-gradient(to right, #eab308 , #f97316)',
    gradientGreen: 'linear-gradient(to right, #22c55e , #10b981)',
    gradientRed: 'linear-gradient(to right, #ef4444 , #ec4899)',
    gradientBlue: 'linear-gradient(to right, #3b82f6 , #06b6d4)',
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
          background: theme.palette.gradientMidnightSpace,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px',
          '&:last-child': {
            paddingBottom: '0px'
          }
        }
      }
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
