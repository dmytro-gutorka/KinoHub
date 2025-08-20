import { AsideBarLink } from '@features/aside-bar';
import AsideBarSectionContainer from './AsideBarSectionContainer';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function AsideBarGeneralSection() {
  return (
    <AsideBarSectionContainer title="General">
      <AsideBarLink to="settings" hasIcon>
        <SettingsOutlinedIcon /> Settings
      </AsideBarLink>
    </AsideBarSectionContainer>
  );
}
