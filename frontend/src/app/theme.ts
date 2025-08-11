import './theme';
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

    green: {
      light: 'rgb(74 222 128)',
      dark: 'rgb(34 197 94 / 0.2)',
      darkGradient:
        'linear-gradient(to bottom right, rgb(34 197 94 / 0.2) , rgb(16 185 129 / 0.2))',
      lightGradient: '',
    },
    purple: {
      light: 'rgb(192 132 252)',
      dark: 'rgb(168 85 247/ 0.2)',
      darkGradient:
        'linear-gradient(to bottom right, rgb(168 85 247 / 0.2) , rgb(236 72 153 / 0.2))',
      lightGradient: '',
    },
    orange: {
      light: 'rgb(250 204 21)',
      dark: 'rgb(234 179 8 / 0.2)',
      darkGradient:
        'linear-gradient(to bottom right, rgb(234 179 8 / 0.2) , rgb(249 115 22 / 0.2))',
      lightGradient: '',
    },
    blue: {
      light: 'rgb(96 165 250)',
      dark: 'rgb(59 130 246  / 0.2)',
      darkGradient:
        'linear-gradient(to bottom right, rgb(59 130 246 / 0.2) , rgb(6 182 212 / 0.2))',
      lightGradient: '',
    },
  },
  spacing: 4,
});

const finalTheme = createTheme(theme, {
  customStyles: {
    border: `1px solid ${theme.palette.transparentGrey}`,
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
          opacity: 0.9,
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
          padding: theme.spacing(4),
          '&:last-child': {
            paddingBottom: '0px',
          },
          '&.MuiCardContent-root': {
            paddingBottom: theme.spacing(4),
          },
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
          fontSize: theme.spacing(3.75),
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
