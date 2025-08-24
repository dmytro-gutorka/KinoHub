import { AsideBarLink } from '@features/aside-bar';
import Logo from '@shared/ui/Logo';
import { Divider, Stack } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const AsideBar = () => {
  return (
    <Stack gap={6} ml={4}>
      <Logo />
      <Stack pr={4}>
        <Stack mb={4} gap={2}>
          <AsideBarLink to="/" hasIcon>
            <HomeOutlinedIcon /> Home
          </AsideBarLink>
          <AsideBarLink to="movies" hasIcon>
            <MovieOutlinedIcon /> Movies
          </AsideBarLink>
          <AsideBarLink to="series" hasIcon>
            <LiveTvRoundedIcon /> TV Shows
          </AsideBarLink>
          <AsideBarLink to="movie-board" hasIcon>
            <DashboardOutlinedIcon /> Movieboard
          </AsideBarLink>
          <AsideBarLink to="dashboard" hasIcon>
            <InsertChartOutlinedOutlinedIcon /> Dashboard
          </AsideBarLink>
          <AsideBarLink to="history" hasIcon>
            <RestoreRoundedIcon /> History
          </AsideBarLink>
        </Stack>

        <Divider sx={{ marginBottom: 6 }}></Divider>

        <Stack gap={2}>
          <AsideBarLink to="profile" hasIcon>
            <PersonOutlineOutlinedIcon /> Profile
          </AsideBarLink>
          <AsideBarLink to="settings" hasIcon>
            <SettingsOutlinedIcon /> Settings
          </AsideBarLink>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
