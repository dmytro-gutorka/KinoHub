import { Stack } from '@mui/material';
import SeasonItem from '../seasonItem';

const SeasonList = ({ seasons, tvSeason, onSetTvSeason }) => {
  return (
    <Stack component="ul" spacing={2}>
      {seasons.map((season) => {
        return <SeasonItem key={season.id} seasonData={season} tvSeason={tvSeason} onSetTvSeason={onSetTvSeason} />;
      })}
    </Stack>
  );
};

export default SeasonList;
