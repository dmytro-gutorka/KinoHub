import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AsideBarSectionContainer from './AsideBarSectionContainer';
import { AsideBarLink } from '@features/aside-bar';

export default function AsideBarLibrarySection() {
  return (
    <AsideBarSectionContainer title="Library">
      <AsideBarLink to="movie-board" hasIcon>
        <DashboardOutlinedIcon /> MovieBoard
      </AsideBarLink>
      <AsideBarLink to="dashboard" hasIcon>
        <InsertChartOutlinedOutlinedIcon /> DashBoard
      </AsideBarLink>
      <AsideBarLink to="profile" hasIcon>
        <PersonOutlineOutlinedIcon /> Profile
      </AsideBarLink>
    </AsideBarSectionContainer>
  );
}
