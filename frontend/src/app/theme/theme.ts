import { palette } from '@app/theme/palette';
import { shape } from '@app/theme/shape';
import { typography } from '@app/theme/typography';
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
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minWidth: '300px',
        },
      }
    }
  }
})

export default theme