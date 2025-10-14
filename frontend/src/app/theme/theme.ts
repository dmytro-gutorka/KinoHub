import { typography } from '@app/theme/typography';
import { palette } from '@app/theme/palette';
import { shape } from '@app/theme/shape';
import { createTheme } from '@mui/material';
import { MuiOutlinedInput } from '@app/theme/components/outlinedInput';
import { MuiCardContent } from '@app/theme/components/cardContent';
import { MuiCssBaseline } from '@app/theme/components/cssBaseline';
import { MuiTypography } from '@app/theme/components/typography';
import { MuiDivider } from '@app/theme/components/divider';
import { MuiButton } from '@app/theme/components/button';
import { MuiLink } from '@app/theme/components/link';
import { MuiTabs } from '@app/theme/components/tabs';
import { MuiTab } from '@app/theme/components/tab';

const base = createTheme({
  spacing: 4,
  typography,
  palette,
  shape,
});

// add box shadow to cards -   box-shadow: 0 0 10px rgba(160,  192, 244,0.4);
// button bg colors   background: rgba(59,130,246,0.1);   background-color: #3B82F6;
const theme = createTheme(base, {
  border: `1px solid ${base.palette.transparentGrey01}`,
  components: {
    MuiOutlinedInput: MuiOutlinedInput(base),
    MuiCssBaseline: MuiCssBaseline(base),
    MuiCardContent: MuiCardContent(base),
    MuiTypography: MuiTypography(base),
    MuiDivider: MuiDivider(base),
    MuiButton: MuiButton(base),
    MuiLink: MuiLink(base),
    MuiTabs: MuiTabs(base),
    MuiTab: MuiTab(base),
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: '300px',
          borderRadius: 5,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          '& .MuiDialog-paper': {
            border: `1px solid ${base.palette.transparentGrey03}`,
            borderRadius: base.spacing(6),
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },

          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(0,0,0,0.2)',
          },

          '& .MuiInputBase-root': {
            minWidth: '400px',

            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${base.palette.transparentGrey03}`,
            },
          },
        },
      },
    },
  },
});

// button text
// caption text
// overline text

export default theme;
