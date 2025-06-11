import { Box, Stack, Typography } from '@mui/material';
import AppNavLink from '../AppNavLink';

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
            <AppNavLink to="/" hasIcon>
              <HomeOutlinedIcon /> Home
            </AppNavLink>
            <AppNavLink to="/discover" hasIcon>
              <MovieOutlinedIcon /> Discover
            </AppNavLink>
            <AppNavLink to="/dashboard" hasIcon>
              <MovieOutlinedIcon /> Dashboard
            </AppNavLink>
            <AppNavLink to="/achievements" hasIcon>
              <MovieOutlinedIcon /> Achievements
            </AppNavLink>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2">
            Library
          </Typography>
          <Stack component="ul">
            <AppNavLink to="/recent" hasIcon>
              <MovieOutlinedIcon /> Recent
            </AppNavLink>
            <AppNavLink to="/playlists" hasIcon>
              <MovieOutlinedIcon /> Playlists
            </AppNavLink>
            <AppNavLink to="/watchboard" hasIcon>
              <MovieOutlinedIcon /> WatchBoard
            </AppNavLink>
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle1" component="h2">
            General
          </Typography>
          <Stack component="ul">
            <AppNavLink to="/settings" hasIcon>
              <MovieOutlinedIcon /> Settings
            </AppNavLink>
            <AppNavLink to="/" hasIcon>
              <MovieOutlinedIcon /> Settings
            </AppNavLink>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
};

export default AsideBar;
