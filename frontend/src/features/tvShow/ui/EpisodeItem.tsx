import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { useQueryClient } from '@tanstack/react-query';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import getPosterUrl from '@shared/helpers/getPosterUrl';

export interface EpisodeItemProps {
  episodeItem: TmdbEpisodeInfo;
}

const EpisodeItem = ({ episodeItem }: EpisodeItemProps) => {
  const {
    episode_number: episodeNumber,
    season_number: seasonNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    show_id: id,
    // isWatched,
    overview,
    runtime,
    name,
  } = episodeItem;

  const queryClient = useQueryClient();
  const theme = useTheme();

  return (
    <Stack direction="row" border={theme.customStyles.border} borderRadius={1} p={2}>
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
          {/*<IconButton onClick={handleWatchStatus}>*/}
          {/*  {!isWatched ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon />}*/}
          {/*</IconButton>*/}
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
