import { Stack } from '@mui/material';

import Logo from '@shared/ui/Logo';
import AsideBarMenuSectionLinks from '@features/asideBar/ui/AsideBarMenuSection';
import AsideBarLibrarySection from '@features/asideBar/ui/AsideBarLibrarySection';
import AsideBarGeneralSection from '@features/asideBar/ui/AsideBarGeneralSection';

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
