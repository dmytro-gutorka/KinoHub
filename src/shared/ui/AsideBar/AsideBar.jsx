import { Box, Stack, Typography } from '@mui/material';
import RouterLink from '../RouterLink';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';

const AsideBar = () => {
  return (
    <Stack component="aside" padding={4} gap={4} minHeight="100vh">
      <Box>Logo</Box>

      <Stack spacing={2.5}>
        <Box>
          <Typography variant="subtitle1" component="h2">
            Menu
          </Typography>
          <Stack component="ul">
            <RouterLink to="/" icon={true}>
              <HomeOutlinedIcon /> Home
            </RouterLink>
            <RouterLink to="/discover" icon={true}>
              <MovieOutlinedIcon /> Discover
            </RouterLink>
            <RouterLink to="/dashboard" icon={true}>
              <MovieOutlinedIcon /> Dashboard
            </RouterLink>
            <RouterLink to="/achievements" icon={true}>
              <MovieOutlinedIcon /> Achievements
            </RouterLink>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2">
            Library
          </Typography>
          <Stack component="ul">
            <RouterLink to="/recent" icon={true}>
              <MovieOutlinedIcon /> Recent
            </RouterLink>
            <RouterLink to="/playlists" icon={true}>
              <MovieOutlinedIcon /> Playlists
            </RouterLink>
            <RouterLink to="/watchboard" icon={true}>
              <MovieOutlinedIcon /> WatchBoard
            </RouterLink>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2">
            General
          </Typography>
          <Stack component="ul">
            <RouterLink to="/settings" icon={true}>
              <MovieOutlinedIcon /> Settings
            </RouterLink>
            <RouterLink to="/" icon={true}>
              <MovieOutlinedIcon /> Log Out
            </RouterLink>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
