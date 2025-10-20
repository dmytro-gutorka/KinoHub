import { Divider, Stack, useTheme } from '@mui/material';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Diversity1OutlinedIcon from '@mui/icons-material/Diversity1Outlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Logo from '@shared/ui/Logo';
import StyledNavLink from '@shared/ui/StyledNavLink';
import StyledSubNavLink from '@shared/ui/StyledSubNavLink';
import AccordionDetails from '@mui/material/AccordionDetails';

export default function AsideBar() {
  const marginLeft = 4;
  const theme = useTheme();

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
          <Accordion
            sx={{
              minWidth: 200,
              boxShadow: 'none',

              '&.MuiAccordion-root': {
                backgroundColor: 'transparent',
                backgroundImage: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                pl: 3,
                height: 50,
                minHeight: 50,
                fontWeight: 900,
                paddingRight: 12,
                borderRadius: 2,
                letterSpacing: 1,
                textTransform: 'capitalize',
                justifyContent: 'space-between',

                '&.Mui-expanded': {
                  minHeight: 50,
                  height: 50,
                },

                '&.MuiButtonBase-root': {
                  paddingRight: 2,
                },

                '&.active, &:hover': {
                  color: theme.palette.common.white,
                  background: theme.palette.transparentGrey01,
                },
              }}
            >
              <Stack direction="row" gap={2} alignItems="center">
                <InsertChartOutlinedOutlinedIcon />
                <Typography fontWeight={900}>Dashboard</Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={2}>
                <StyledSubNavLink to="dashboard/overview" label="Overview" ml={4} />
                <StyledSubNavLink to="dashboard/tv" label="Tv Shows" ml={4} />
                <StyledSubNavLink to="dashboard/movies" label="Movies" ml={4} />
              </Stack>
            </AccordionDetails>
          </Accordion>

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
