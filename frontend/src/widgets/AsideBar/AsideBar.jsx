import { Box, Stack } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import SidebarSection from '../../shared/ui/SidebarSection';

const AsideBar = () => {

  const menu = {
    home: <HomeOutlinedIcon />,
    movies: <MovieOutlinedIcon />,
    shows:  <LiveTvRoundedIcon />,
    history: <RestoreRoundedIcon />,
  }

  const tools = {
    watchBoard: <DashboardOutlinedIcon />,
    dashBoard: <InsertChartOutlinedOutlinedIcon />,
    profile:  <PersonOutlineOutlinedIcon />,
  }

  const general = {
    settings: <SettingsOutlinedIcon />,
    logout: <LoginOutlinedIcon />,
  }

  return (
    <Stack>
      <Box>Logo</Box>
      <Stack gap={5}>
        <SidebarSection tabs={menu} title="Menu"/>
        <SidebarSection tabs={tools} title="Library"/>
        <SidebarSection tabs={general} title="General"/>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
