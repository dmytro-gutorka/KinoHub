import { Box, IconButton, Stack, Typography } from '@mui/material';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import getPosterURL from '../../helpers/getPosterURL';
import LabelWithIcon from '../LabelWithIcon';
import getYearFromDate from '../../helpers/getYearFromDate';

const TvEpisodeItem = ({ episodeData }) => {

  const {
    episode_number: episodeNumber,
    vote_average: voteAverage,
    still_path: posterPath,
    air_date: airDate,
    overview,
    runtime,
    name,
  } = episodeData

  console.log(episodeData)

  return (
    <Stack direction="row" border="1px solid lightgrey" borderRadius={1}>
      <Box component="img" src={getPosterURL(posterPath)} width="200px" height="140px" borderRadius={1}/>
      <Box p={3}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="h6" component="h3">{episodeNumber}. {name}</Typography>
            <IconButton>
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