import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useUpdateEpisodeAction from '@features/tv-show/model/hooks/useUpdateEpisodeAction';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import getPosterUrl from '@shared/helpers/getPosterUrl';

export interface EpisodeItemProps {
  episodeItem: TmdbEpisodeInfo;
  episodeActionItem: EpisodeEntity;
}

const EpisodeItem = ({ episodeItem, episodeActionItem }: EpisodeItemProps) => {
  const {
    episode_number: episodeNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    season_number: seasonNumber,
    show_id: tvShowId,
    overview,
    runtime,
    name,
  } = episodeItem;

  const theme = useTheme();
  const imageUrl = posterPath
    ? getPosterUrl(posterPath)
    : './public/no-image-placeholder-horizontal.jpg';

  const { isWatched } = episodeActionItem;
  const { mutate: updateEpisodeAction } = useUpdateEpisodeAction(
    tvShowId,
    seasonNumber,
    episodeNumber
  );

  const handleIsWatchedChange = () => updateEpisodeAction({ isWatched: !isWatched });

  return (
    <Stack direction="row" border={theme.customStyles.border} borderRadius={1} p={2}>
      <Box component="img" src={imageUrl} width="200px" height="140px" borderRadius={1} />
      <Stack pl={3} flexGrow={1}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" component="h3" mb={1}>
            {episodeNumber}. {name}
          </Typography>
          <IconButton onClick={handleIsWatchedChange}>
            {!isWatched ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon />}
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={1} mb={2}>
          <LabelWithIcon label={runtime + 'm'}>
            <AccessTimeIcon />
          </LabelWithIcon>

          <LabelWithIcon label={getYearFromDate(airDate)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </LabelWithIcon>

          <LabelWithIcon label={voteAverage?.toFixed(2)}>
            <StarBorderIcon fontSize="small" />
          </LabelWithIcon>
        </Stack>

        <Typography variant="subtitle1" lineHeight={1.2}>
          {overview.slice(0, 200) + '...'}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default EpisodeItem;
