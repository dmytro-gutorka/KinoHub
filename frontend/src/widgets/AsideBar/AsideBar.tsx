import { Divider, Stack } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

import theme from '@app/theme/theme';
import Logo from '@shared/ui/Logo';
import StyledNavLink from '@shared/ui/StyledNavLink';

export default function AsideBar() {
  const marginLeft = 4;

  return (
    <Stack gap={6} ml={marginLeft} position="relative">
      <Logo />

      <Divider sx={{ width: `calc(100% + ${theme.spacing(marginLeft)})`, ml: -marginLeft }} />

      <Stack pr={4}>
        <Stack mb={4} gap={2}>
          <StyledNavLink to="/" icon={<HomeOutlinedIcon />} label="Home" />
          <StyledNavLink to="movies" icon={<MovieOutlinedIcon />} label="Movies" />
          <StyledNavLink to="series" icon={<LiveTvRoundedIcon />} label="TV Shows" />
          <StyledNavLink to="movie-board" icon={<DashboardOutlinedIcon />} label="Movieboard" />
          <StyledNavLink
            to="dashboard"
            icon={<InsertChartOutlinedOutlinedIcon />}
            label="Dashboard"
          />
          <StyledNavLink to="history" icon={<RestoreRoundedIcon />} label="History" />
        </Stack>
      </Stack>

      <Divider sx={{ width: `calc(100% + ${theme.spacing(marginLeft)})`, ml: -marginLeft }} />

      <Stack pr={4}>
        <Stack gap={2}>
          <StyledNavLink to="profile" icon={<PersonOutlineOutlinedIcon />} label="Profile" />
          <StyledNavLink to="people" icon={<GroupAddOutlinedIcon />} label="People" />
          <StyledNavLink to="friends" icon={<Diversity1OutlinedIcon />} label="friends" />
        </Stack>
      </Stack>
    </Stack>
  );
}
