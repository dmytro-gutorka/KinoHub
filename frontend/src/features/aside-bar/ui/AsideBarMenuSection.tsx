import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import AsideBarSectionContainer from '@features/aside-bar/ui/AsideBarSectionContainer';
import { AsideBarLink } from '@features/aside-bar';

export default function AsideBarMenuSectionLinks() {
  return (
    <AsideBarSectionContainer title="Menu">
      <AsideBarLink to="/" hasIcon>
        <HomeOutlinedIcon /> Home
      </AsideBarLink>
      <AsideBarLink to="movies" hasIcon>
        <MovieOutlinedIcon /> Movie
      </AsideBarLink>
      <AsideBarLink to="series" hasIcon>
        <LiveTvRoundedIcon /> TV Show
      </AsideBarLink>
      <AsideBarLink to="history" hasIcon>
        <RestoreRoundedIcon /> History
      </AsideBarLink>
    </AsideBarSectionContainer>
  );
}
