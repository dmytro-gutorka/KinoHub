import { Box, Stack } from '@mui/material';
import getPosterURL from '../../helpers/getPosterURL';

const TvSeasonItem = ({ seasonData, tvSeason, onSetTvSeason}) => {

  const {
    poster_path: posterPath,
    season_number: seasonNumber,
    episode_count: episodeCount,
    first_air_date: airDate,
  } = seasonData

  const imgURL = getPosterURL(posterPath)

  return (
    <Box
      onClick={() => onSetTvSeason(seasonNumber)}
      width="100%"
      borderRadius={1}
      border='1px solid grey'
      p={2}
      sx={{backgroundColor: `${tvSeason === seasonNumber ? 'grey' : 'back'}`}}>
      <Stack direction="row" spacing={2} alignItems='center'>
        <Box component="img" src={imgURL} width="48px" height="72px" borderRadius={1}/>
        <Stack>
         <Box component="span">Season {seasonNumber}</Box>
          <Box component="span">{episodeCount} episodes</Box>
          <Box component="span">0/{seasonNumber} watched</Box>
        </Stack>
      </Stack>
    </Box>
  )
};

export default TvSeasonItem;