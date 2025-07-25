import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import updateMediaAction from '@shared/api/kinohub/updateMediaAction';
import getYearFromDate from '../../../../shared/helpers/getYearFromDate';
import LabelWithIcon from '../../../../shared/ui/LabelWithIcon';
import getPosterURL from '../../../../shared/helpers/getPosterURL';

import { getActionForURL } from '../../../../shared/helpers/getActionForURL';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const EpisodeItem = ({ episodeData }) => {
  const {
    episode_number: episodeNumber,
    season_number: seasonNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    show_id: id,
    isWatched,
    overview,
    runtime,
    name,
  } = episodeData;

  const queryClient = useQueryClient();
  const theme = useTheme();

  const actionMutation = useMutation({
    mutationFn: (actionData) => updateMediaAction(id, actionData, getActionForURL(actionData)),
    onSettled: () =>
      queryClient.invalidateQueries({
        queryKey: ['tvShowSeasonActions', id, seasonNumber],
      }),
    onError: (err, _, context) =>
      queryClient.setQueryData(['tvShowSeasonActions', id, seasonNumber], context.prevData),
    onMutate: async (actionData) => {
      await queryClient.cancelQueries(['tvShowSeasonActions', id, seasonNumber]);
      const prevData = queryClient.getQueryData(['tvShowSeasonActions', id, seasonNumber]);

      queryClient.setQueryData(['tvShowSeasonActions', id, seasonNumber], (old) => ({
        ...old,
        ...actionData,
      }));

      return { prevData };
    },
  });

  function handleWatchStatus() {
    actionMutation.mutate({ isWatched: !isWatched, season: seasonNumber, episode: episodeNumber });
  }

  return (
    <Stack direction="row" border={theme.customComponents.border} borderRadius={1}>
      <Box
        component="img"
        src={getPosterURL(posterPath)}
        width="200px"
        height="140px"
        borderRadius={1}
      />
      <Box p={3}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h6" component="h3">
            {episodeNumber}. {name}
          </Typography>
          <IconButton onClick={handleWatchStatus}>
            {!isWatched ? <VisibilityOffOutlinedIcon /> : <VisibilityIcon />}
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={1} mb={2}>
          <LabelWithIcon data={runtime + 'm'}>
            <AccessTimeIcon />
          </LabelWithIcon>

          <LabelWithIcon data={getYearFromDate(airDate)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </LabelWithIcon>

          <LabelWithIcon data={voteAverage?.toFixed(2)}>
            <StarBorderIcon fontSize="small" />
          </LabelWithIcon>
        </Stack>
        <Typography variant="subtitle1" lineHeight={1.2}>
          {overview.slice(1, 150) + '...'}
        </Typography>
      </Box>
    </Stack>
  );
};

export default EpisodeItem;
