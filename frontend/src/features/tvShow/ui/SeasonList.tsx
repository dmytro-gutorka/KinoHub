import { Stack } from '@mui/material';
import SeasonItem from './SeasonItem';
import { SeasonListProps } from '@features/tvShow/model/types/tvShowTypes';

const SeasonList = ({ seasonList, tvSeason, onSetTvSeason }: SeasonListProps) => {
  return (
    <Stack component="ul" spacing={2}>
      {seasonList.map((season) => (
        <SeasonItem
          key={season.id}
          seasonData={season}
          tvSeason={tvSeason}
          onSetTvSeason={onSetTvSeason}
        />
      ))}
    </Stack>
  );
};

export default SeasonList;
