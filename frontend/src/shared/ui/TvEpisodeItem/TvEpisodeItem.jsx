import { Box, IconButton, Stack, Typography } from '@mui/material';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import getYearFromDate from '../../helpers/getYearFromDate';
import useMediaAction from '../../../features/movies/hooks/useMediaAction';
import LabelWithIcon from '../LabelWithIcon';
import getPosterURL from '../../helpers/getPosterURL';
import useActionDataFindOrCreate from '../../../features/movies/hooks/useActionDataFindOrCreate';
import { useLoaderData } from 'react-router';

const TvEpisodeItem = ({ episodeData }) => {

  const {
    episode_number: episodeNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    show_id: id,
    season_number: season,
    overview,
    runtime,
    name,
  } = episodeData

  // const mediaType = useLoaderData()

  // const actionMutation = useMediaAction("episodeActionData", id)

  // const { data: mediaActionData, isLoading } = useActionDataFindOrCreate(
  //   'episodeActionData', id, { mediaType, runtime, episode: episodeNumber, season })
  //
  // if (isLoading) return <div>Loading...</div> // replace to loaders/spiners
  //
  // const { isWatched } = mediaActionData

  // const handleWatchStatus = () => actionMutation.mutate({ isWatched: !isWatched, season, episode: episodeNumber })

  return (
    <Stack direction="row" border="1px solid lightgrey" borderRadius={1}>
      <Box component="img" src={getPosterURL(posterPath)} width="200px" height="140px" borderRadius={1}/>
      <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h3">{episodeNumber}. {name}</Typography>
            <IconButton >
              <VisibilityOffOutlinedIcon sx={{ color: 'rgb(74 222 128)'}}/>
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