import { Stack } from '@mui/material';

import Logo from '@shared/ui/Logo';
import AsideBarMenuSectionLinks from '@features/aside-bar/ui/AsideBarMenuSection';
import AsideBarLibrarySection from '@features/aside-bar/ui/AsideBarLibrarySection';
import AsideBarGeneralSection from '@features/aside-bar/ui/AsideBarGeneralSection';

const AsideBar = () => {
  return (
    <Stack gap={10} ml={4}>
      <Logo />
      <Stack gap={6} pr={4}>
        <AsideBarMenuSectionLinks />
        <AsideBarLibrarySection />
        <AsideBarGeneralSection />
      </Stack>
    </Stack>
  );
};

export default AsideBar;
