import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import useUpdateEpisodeAction from '@features/tvShow/model/hooks/useUpdateEpisodeAction';

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

  const { isWatched } = episodeActionItem;
  const { mutate: updateEpisodeAction, variables } = useUpdateEpisodeAction(
    tvShowId,
    seasonNumber,
    episodeNumber
  );

  if (variables) console.log(variables);

  return (
    <Stack
      direction="row"
      border={theme.customStyles.border}
      borderRadius={1}
      justifyContent="space-between"
      p={2}
    >
      <Box
        component="img"
        src={getPosterUrl(posterPath)}
        width="200px"
        height="140px"
        borderRadius={1}
      />
      <Box pl={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" component="h3" mb={1}>
            {episodeNumber}. {name}
          </Typography>
          <IconButton onClick={() => updateEpisodeAction({ isWatched: !isWatched })}>
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
      </Box>
    </Stack>
  );
};

export default EpisodeItem;
