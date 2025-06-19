import { Box, ListItem, Stack } from '@mui/material';
import { BASE_POSTER_URL } from '../../../config/constants';

const TvSeasonItem = ({ seasonData, tvSeason, onSetTvSeason}) => {

  const { poster_path: posterPath, season_number: seasonNumber, episode_count: episodeCount } = seasonData
  const imgURL = `${BASE_POSTER_URL}${posterPath}`

  return (
    <Box
      onClick={() => onSetTvSeason(seasonNumber)}
      maxWidth="200px"
      borderRadius={1}
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