import { palette } from '@app/theme/palette';
import { shape } from '@app/theme/shape';
import { typography } from '@app/theme/typography';
import { createTheme } from '@mui/material';
import { MuiCardContent } from '@app/theme/components/cardContent';
import { MuiCssBaseline } from '@app/theme/components/cssBaseline';
import { MuiTypography } from '@app/theme/components/typography';
import { MuiDivider } from '@app/theme/components/divider';
import { MuiButton } from '@app/theme/components/button';
import { MuiLink } from '@app/theme/components/link';
import { MuiTabs } from '@app/theme/components/tabs';
import { MuiTab } from '@app/theme/components/tab';
import { MuiOutlinedInput } from '@app/theme/components/outlinedInput';

const base = createTheme({
  spacing: 4,
  typography,
  palette,
  shape,
});

const theme = createTheme(base, {
  border: `1px solid ${base.palette.transparentGrey}`,
  customStyles: {
    border: `1px solid ${base.palette.transparentGrey}`,

  },

  components: {
    MuiCssBaseline: MuiCssBaseline(base),
    MuiCardContent: MuiCardContent(base),
    MuiTypography: MuiTypography(base),
    MuiDivider: MuiDivider(base),
    MuiButton: MuiButton(base),
    MuiLink: MuiLink(base),
    MuiTabs: MuiTabs(base),
    MuiTab: MuiTab(base),
    MuiOutlinedInput: MuiOutlinedInput(base),
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiNotchedOutlined-root-MuiOutlinedInput-notchedOutline': {
            width: '500px',
          }
        }
      }
    }
  }
})

export default theme