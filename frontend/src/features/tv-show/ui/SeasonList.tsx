import { TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import SeasonItem from './SeasonItem';

export interface SeasonListProps {
  seasons: TmdbSeasonInfo[];
  seasonNumber: number;
  onSeasonNumber: (tvSeason: number) => void;
}

const SeasonList = ({ seasons, seasonNumber, onSeasonNumber }: SeasonListProps) => {
  return (
    <Stack component="ul" spacing={2}>
      {seasons.map((season) => (
        <SeasonItem
          key={season.id}
          season={season}
          seasonNumber={seasonNumber}
          onSeasonNumber={onSeasonNumber}
        />
      ))}
    </Stack>
  );
};

export default SeasonList;
