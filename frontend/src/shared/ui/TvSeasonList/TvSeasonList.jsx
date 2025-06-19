import { Stack } from '@mui/material';
import TvSeasonItem from '../TvSeasonItem';

const TvSeasonList = ({seasons, tvSeason, onSetTvSeason}) => {
  return (
    <Stack component="ul" spacing={2}>
      {seasons.map(season => {

        return <TvSeasonItem
          key={season.id}
          seasonData={season}
          tvSeason={tvSeason}
          onSetTvSeason={onSetTvSeason}
        />
      })}
    </Stack>
  )
};

export default TvSeasonList;