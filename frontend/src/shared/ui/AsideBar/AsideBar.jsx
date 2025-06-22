import { Box, Stack } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import SidebarSection from '../SidebarSection';

const AsideBar = () => {

  const menu = {
    home: <HomeOutlinedIcon />,
    discover: <MovieOutlinedIcon />,
    dashboard:  <MovieOutlinedIcon />,
    achievements: <MovieOutlinedIcon />,
  }

  const library = {
    movies: <HomeOutlinedIcon />,
    shows: <MovieOutlinedIcon />,
    watchBoard:  <MovieOutlinedIcon />,
  }

  const general = {
    settings: <HomeOutlinedIcon />,
    logout: <MovieOutlinedIcon />,
  }

  return (
    <Stack>
      <Box>Logo</Box>
      <Stack>
        <SidebarSection tabs={menu} title="Menu"/>
        <SidebarSection tabs={library} title="Library"/>
        <SidebarSection tabs={general} title="General"/>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
