import { Box, IconButton, Stack, Typography } from '@mui/material';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import getYearFromDate from '../../helpers/getYearFromDate';
import LabelWithIcon from '../LabelWithIcon';
import getPosterURL from '../../helpers/getPosterURL';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import updateMediaAction from '../../../features/movies/api/updateMediaAction';
import { getActionForURL } from '../../helpers/getActionForURL';


const TvEpisodeItem = ({ episodeData, mediaActionEpisodeData }) => {

  const {
    episode_number: episodeNumber,
    season_number: seasonNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    overview,
    runtime,
    name,
    show_id: id
  } = episodeData


  // const queryClient = useQueryClient();
  //
  // const actionMutation =  useMutation({
  //   mutationFn: ( actionData ) =>
  //     updateMediaAction(id, actionData, getActionForURL(actionData)),
  //   onSettled: () =>
  //     queryClient.invalidateQueries({
  //       queryKey: ['episodeActionData', id, seasonNumber, episodeNumber],
  //     }),
  //   onError: (err,_ , context) =>
  //     queryClient.setQueryData(['episodeActionData', id, seasonNumber, episodeNumber], context.prevData),
  //   onMutate: async ( actionData ) => {
  //     await queryClient.cancelQueries(['episodeActionData', id, seasonNumber, episodeNumber])
  //     const prevData = queryClient.getQueryData(['episodeActionData', id, seasonNumber, episodeNumber])
  //
  //     queryClient.setQueryData(['episodeActionData', id, seasonNumber, episodeNumber], old => ({ ...old, ...actionData }))
  //
  //     return { prevData }
  //   }}
  // )

  // function handleWatchStatus() {
  //   actionMutation.mutate({ isWatched: !isWatched })
  // }


  /// USE MUTATION !!!!!
  /// USE MUTATION !!!!!
  /// USE MUTATION !!!!!
  /// USE MUTATION !!!!!
  /// USE MUTATION !!!!!
  /// USE MUTATION !!!!!

  const { isWatched } = mediaActionEpisodeData

  return (
    <Stack direction="row" border="1px solid lightgrey" borderRadius={1}>
      <Box component="img" src={getPosterURL(posterPath)} width="200px" height="140px" borderRadius={1}/>
      <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h3">{episodeNumber}. {name}</Typography>
            <IconButton >
              {isWatched && <VisibilityOffOutlinedIcon sx={{ color: 'rgb(74 222 128)'}}/>}
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
        <Typography variant="subtitle1" lineHeight={1.2}>{overview}</Typography>
      </Box>
    </Stack>
  )
};

export default TvEpisodeItem;