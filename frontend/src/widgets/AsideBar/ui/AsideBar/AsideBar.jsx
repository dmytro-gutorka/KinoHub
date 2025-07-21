import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Stack } from '@mui/material';

import Logo from '../../../../shared/ui/Logo';
import AsideBarSection from '../AsideBarSection';

const AsideBar = () => {
  const menu = {
    home: {
      icon: <HomeOutlinedIcon />,
      path: '/',
    },
    movies: {
      icon: <MovieOutlinedIcon />,
      path: 'movies',
    },
    shows: {
      icon: <LiveTvRoundedIcon />,
      path: 'shows',
    },
    history: {
      icon: <RestoreRoundedIcon />,
      path: '/history',
    },
  };

  const tools = {
    watchBoard: {
      icon: <DashboardOutlinedIcon />,
      path: 'watch-board',
    },
    dashBoard: {
      icon: <InsertChartOutlinedOutlinedIcon />,
      path: 'dashboard',
    },
    profile: {
      icon: <PersonOutlineOutlinedIcon />,
      path: 'profile',
    },
  };

  const general = {
    settings: {
      icon: <SettingsOutlinedIcon />,
      path: 'settings',
    },
    logout: {
      icon: <LoginOutlinedIcon />,
      path: 'logout',
    },
    signIn: {
      icon: <LoginOutlinedIcon />,
      path: 'signIn',
    },
  };

  return (
    <Stack gap={10} ml={4}>
      <Logo />
      <Stack gap={6} pr={4}>
        <AsideBarSection tabs={menu} title="Menu" />
        <AsideBarSection tabs={tools} title="Library" />
        <AsideBarSection tabs={general} title="General" />
      </Stack>
    </Stack>
  );
};

export default AsideBar;
