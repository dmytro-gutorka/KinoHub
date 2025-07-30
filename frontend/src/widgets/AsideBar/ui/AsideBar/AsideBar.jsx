import { Stack } from '@mui/material';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import AsideBarSection from '@features/asideBar/ui/AsideBarSection';
import AsideBarLink from '@features/asideBar/ui/AsideBarLink';
import Logo from '../../../../shared/ui/Logo';

const AsideBar = () => {
  return (
    <Stack gap={10} ml={4}>
      <Logo />
      <Stack gap={6} pr={4}>
        <AsideBarSection title="Menu">
          <AsideBarLink to="/" hasIcon>
            <HomeOutlinedIcon /> Home
          </AsideBarLink>
          <AsideBarLink to="movies" hasIcon>
            <MovieOutlinedIcon /> Movie
          </AsideBarLink>
          <AsideBarLink to="tv-show" hasIcon>
            <LiveTvRoundedIcon /> TV Show
          </AsideBarLink>
          <AsideBarLink to="history" hasIcon>
            <RestoreRoundedIcon /> History
          </AsideBarLink>
        </AsideBarSection>

        <AsideBarSection title="Library">
          <AsideBarLink to="movie-board'" hasIcon>
            <DashboardOutlinedIcon /> MovieBoard
          </AsideBarLink>
          <AsideBarLink to="dashboard" hasIcon>
            <InsertChartOutlinedOutlinedIcon /> DashBoard
          </AsideBarLink>
          <AsideBarLink to="profile" hasIcon>
            <PersonOutlineOutlinedIcon /> Profile
          </AsideBarLink>
        </AsideBarSection>

        <AsideBarSection title="General">
          <AsideBarLink to="settings" hasIcon>
            <SettingsOutlinedIcon /> Settings
          </AsideBarLink>
        </AsideBarSection>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
