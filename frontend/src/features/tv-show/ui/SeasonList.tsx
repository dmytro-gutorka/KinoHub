import { Stack } from '@mui/material';
import SeasonItem from './SeasonItem';
import { SeasonDataWithEpisodes } from '@shared/types/generalTypes';

export interface SeasonListProps {
  seasonList: Array<SeasonDataWithEpisodes>;
  currentSeasonNumber: number;
  onSeasonNumber: (tvSeason: number) => void;
}

const SeasonList = ({ seasonList, currentSeasonNumber, onSeasonNumber }: SeasonListProps) => {
  return (
    <Stack component="ul" spacing={2}>
      {seasonList.map((seasonItem) => (
        <SeasonItem
          key={seasonItem.id}
          seasonItem={seasonItem}
          currentSeasonNumber={currentSeasonNumber}
          onSeasonNumber={onSeasonNumber}
        />
      ))}
    </Stack>
  );
};

export default SeasonList;
